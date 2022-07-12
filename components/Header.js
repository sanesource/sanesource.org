import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Icon from "feather-icons-react";

import styles from "../styles/components/Header.module.css";

const navLinks = [
  { title: "Projects", href: "#projects" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

function Header() {
  const sidebarRef = useRef();
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const isDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark");
  const logo = isDark ? "logo-white.png" : "logo.png";
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const hideSidebar = () => {
    sidebarRef.current.style.left = "-100vw";
  };

  const toggleSidebar = () => {
    const isSidebarOpen = sidebarRef.current.style.left === "0px";
    if (isSidebarOpen) {
      hideSidebar();
    } else {
      sidebarRef.current.style.left = 0;
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const links = (
    <>
      {navLinks.map((link) => (
        <Link key={link.title} href={link.href}>
          <a onClick={hideSidebar}>{link.title}</a>
        </Link>
      ))}
    </>
  );

  if (!isMounted) return null;

  return (
    <header className={styles.header}>
      <div className={styles.mobileNav}>
        <button className={styles.menu} onClick={toggleSidebar}>
          <Icon icon="menu" size={32} />
        </button>
        <Link href="/">
          <a>
            <Image width={32} height={32} src={`/assets/${logo}`} alt="logo" />
          </a>
        </Link>
      </div>
      <nav>
        <Link href="/">
          <b className={styles.title}>SaneSource</b>
        </Link>
        <div className={styles.navBarItems}>{links}</div>
      </nav>
      <div>
        <DarkModeSwitch checked={isDark} onChange={toggleTheme} />
      </div>
      <section ref={sidebarRef} className={styles.sidebar}>
        <Link href="/">
          <a onClick={toggleSidebar}>
            <h2>SaneSource</h2>
          </a>
        </Link>
        <div>{links}</div>
        <div className={styles.sidebarOuter} onClick={toggleSidebar}></div>
      </section>
    </header>
  );
}

export default Header;
