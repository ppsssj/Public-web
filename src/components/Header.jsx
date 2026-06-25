import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "https://www.mujinassociates.com/home" },
  { label: "Profile", href: "https://www.mujinassociates.com/HR-Consulting" },
  { label: "Publication", href: "https://www.mujinassociates.com/Consulting01" },
  { label: "Research", href: "https://www.mujinassociates.com/Consulting02" },
  { label: "Lecture", href: "https://www.mujinassociates.com/Consulting03" },
  { label: "Members", href: "https://www.mujinassociates.com/Consulting04" },
  { label: "Events", href: "https://www.mujinassociates.com/mujininsight" },
];

function MenuTree({ items, onNavigate }) {
  return (
    <ul className="menu-tree">
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} onClick={onNavigate}>
            {item.label}
          </a>
          {item.children ? <MenuTree items={item.children} onNavigate={onNavigate} /> : null}
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const updateBrandMotion = () => {
      frame = 0;

      if (window.innerWidth < 768) {
        root.style.removeProperty("--brand-progress");
        root.style.removeProperty("--brand-top");
        root.style.removeProperty("--brand-scale");
        return;
      }

      const heroTitle = document.querySelector(".hero-title-desktop");
      const header = document.querySelector(".site-header");

      if (!heroTitle || !header) {
        return;
      }

      const titleRect = heroTitle.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();
      const titleStyle = window.getComputedStyle(heroTitle);
      const titleCenterY = titleRect.top + titleRect.height / 2;
      const headerCenterY = headerRect.top + headerRect.height / 2;
      const progressDistance = Math.min(window.innerHeight * 0.42, 360);
      const progress = Math.min(Math.max(window.scrollY / progressDistance, 0), 1);
      const titleScale = parseFloat(titleStyle.fontSize) / 18;
      const top = titleCenterY + (headerCenterY - titleCenterY) * progress;
      const scale = titleScale + (1 - titleScale) * progress;
      const brandGray = Math.round(255 * (1 - progress));
      const brandTextColor = `rgb(${brandGray}, ${brandGray}, ${brandGray})`;

      root.style.setProperty("--brand-progress", progress.toFixed(3));
      root.style.setProperty("--brand-top", `${top.toFixed(2)}px`);
      root.style.setProperty("--brand-scale", scale.toFixed(3));
      root.style.setProperty("--brand-bg-opacity", progress.toFixed(3));
      root.style.setProperty("--brand-color", brandTextColor);
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateBrandMotion);
      }
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      root.style.removeProperty("--brand-progress");
      root.style.removeProperty("--brand-top");
      root.style.removeProperty("--brand-scale");
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <button
          className="menu-button"
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
          <b>MENU</b>
        </button>
        <a className="brand" href="https://www.mujinassociates.com/">
          A   I   C   S
        </a>
        {/* <div className="header-logo">
          <img src="/Logo/sch_Logo.png?v=1" alt="순천향대학교" />
        </div> */}
      </header>

      <div className={`slide-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button
          className="close-button"
          type="button"
          aria-label="메뉴 닫기"
          onClick={() => setOpen(false)}
        />
        <MenuTree items={navigation} onNavigate={() => setOpen(false)} />
      </div>
      {open ? <button className="menu-backdrop" aria-label="메뉴 닫기" onClick={() => setOpen(false)} /> : null}
    </>
  );
}
