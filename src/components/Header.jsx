import { useState } from "react";
import { navigation } from "../data/siteContent.js";

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
        <div className="header-logo">
          <img src="/Logo/sch_Logo.png?v=1" alt="순천향대학교" />
        </div>
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
