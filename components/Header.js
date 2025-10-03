import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Icon from "feather-icons-react";
import styles from "../styles/components/Header.module.css";

const navLinks = [
  { title: "Projects", href: "#projects" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [sidebarOpen]);

  if (!isMounted) return null;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/">
            <a className={styles.logo}>
              <span>SaneSource</span>
            </a>
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.title} href={link.href}>
                <a className={styles.navLink}>{link.title}</a>
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <Icon icon={isDark ? "sun" : "moon"} size={20} />
            </button>
            <div className={styles.mobileNav}>
              <button
                className={styles.menuButton}
                onClick={toggleSidebar}
                aria-label="Toggle menu"
              >
                <Icon icon="menu" size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarLogo}>SaneSource</span>
          <button
            className={styles.closeButton}
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <Icon icon="x" size={22} />
          </button>
        </div>
        <nav className={styles.sidebarNav}>
          {navLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <a className={styles.sidebarLink} onClick={closeSidebar}>
                {link.title}
              </a>
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${
          sidebarOpen ? styles.backdropVisible : ""
        }`}
        onClick={closeSidebar}
      ></div>
    </>
  );
}

export default Header;
