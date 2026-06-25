import { useEffect, useState } from "react";
import { pageNavigation } from "../data/pages.js";

function MenuTree({ items, onNavigate }) {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

  return (
    <ul className="menu-tree">
      {items.map((item) => {
        const itemPath = item.href.replace(/\/+$/, "") || "/";
        const isActive = currentPath === itemPath;

        return (
          <li key={item.label}>
            <a href={item.href} onClick={onNavigate} aria-current={isActive ? "page" : undefined}>
              {item.label}
            </a>
            {item.children ? <MenuTree items={item.children} onNavigate={onNavigate} /> : null}
          </li>
        );
      })}
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
        root.style.removeProperty("--hero-media-y");
        root.style.removeProperty("--hero-media-scale");
        return;
      }

      const heroTitle = document.querySelector(".hero-title-desktop");
      const header = document.querySelector(".site-header");

      if (!heroTitle || !header) {
        root.style.setProperty("--brand-top", "38px");
        root.style.setProperty("--brand-scale", "1");
        root.style.setProperty("--brand-bg-opacity", "1");
        root.style.setProperty("--brand-color", "rgb(36, 36, 36)");
        return;
      }

      const titleRect = heroTitle.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();
      const titleStyle = window.getComputedStyle(heroTitle);
      const titleCenterY = titleRect.top + titleRect.height / 2;
      const headerCenterY = headerRect.top + headerRect.height / 2;
      const progressDistance = Math.min(window.innerHeight * 0.72, 620);
      const progress = Math.min(Math.max(window.scrollY / progressDistance, 0), 1);
      const titleScale = parseFloat(titleStyle.fontSize) / 18;
      const top = titleCenterY + (headerCenterY - titleCenterY) * progress;
      const scale = titleScale + (1 - titleScale) * progress;
      const brandGray = Math.round(255 * (1 - progress));
      const brandTextColor = `rgb(${brandGray}, ${brandGray}, ${brandGray})`;
      const mediaY = -progress * Math.min(window.innerHeight * 0.32, 280);
      const mediaScale = 1 - progress * 0.36;

      root.style.setProperty("--brand-progress", progress.toFixed(3));
      root.style.setProperty("--brand-top", `${top.toFixed(2)}px`);
      root.style.setProperty("--brand-scale", scale.toFixed(3));
      root.style.setProperty("--brand-bg-opacity", progress.toFixed(3));
      root.style.setProperty("--brand-color", brandTextColor);
      root.style.setProperty("--hero-media-y", `${mediaY.toFixed(2)}px`);
      root.style.setProperty("--hero-media-scale", mediaScale.toFixed(3));
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
      root.style.removeProperty("--hero-media-y");
      root.style.removeProperty("--hero-media-scale");
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
        <a className="brand" href="/">
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
        <MenuTree items={pageNavigation} onNavigate={() => setOpen(false)} />
      </div>
      {open ? <button className="menu-backdrop" aria-label="메뉴 닫기" onClick={() => setOpen(false)} /> : null}
    </>
  );
}
