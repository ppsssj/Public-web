import { useEffect, useState } from "react";

export default function SectionNav({ title, items }) {
  const [activeHref, setActiveHref] = useState(items[0]?.href);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const hasHeroMotion = Boolean(
        document.querySelector(".hero-title-desktop"),
      );

      if (!hasHeroMotion) {
        setIsVisible(true);
        return;
      }

      const progressDistance = Math.min(window.innerHeight * 0.72, 620);
      const progress = Math.min(
        Math.max(window.scrollY / progressDistance, 0),
        1,
      );
      setIsVisible(progress >= 0.82);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  useEffect(() => {
    const onScrollActive = () => {
      const mid = window.innerHeight * 0.5;
      for (const item of items) {
        try {
          const el = document.querySelector(item.href);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= mid && rect.bottom >= mid) {
            setActiveHref(item.href);
            return;
          }
        } catch (e) {
          // ignore malformed selector
        }
      }
    };

    onScrollActive();
    window.addEventListener("scroll", onScrollActive, { passive: true });
    window.addEventListener("resize", onScrollActive);

    return () => {
      window.removeEventListener("scroll", onScrollActive);
      window.removeEventListener("resize", onScrollActive);
    };
  }, [items]);

  return (
    <nav
      className={`page-section-nav ${isVisible ? "is-visible" : ""}`}
      aria-label={`${title} sections`}
    >
      <img
        className="page-section-nav-logo"
        src="/Logo/aics-favicon.png"
        alt=""
      />
      <div className="page-section-nav-links">
        {items.map((item) => (
          <a
            className={activeHref === item.href ? "is-active" : ""}
            href={item.href}
            key={`${item.label}-${item.href}`}
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector(item.href);
              if (target)
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              setActiveHref(item.href);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
