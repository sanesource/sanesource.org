import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import styles from "../styles/components/Footer.module.css";

function Footer() {
  const { systemTheme, theme, setTheme } = useTheme();
  const isDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark");
  const logo = isDark ? "logo-white.png" : "logo.png";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerSections}>
        <section className={styles.footerSection1}>
          <div>
            <Image width={32} height={32} src={`/assets/${logo}`} alt="logo" />
          </div>
          <p>SaneSource</p>
        </section>
        <section className={styles.footerSection2}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </section>
        <section>
          <h4>Contact</h4>
          <p>
            Email: &nbsp;
            <a href="mailto:akul.sanesource@gmail.com">
              akul.sanesource@gmail.com
            </a>
          </p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
