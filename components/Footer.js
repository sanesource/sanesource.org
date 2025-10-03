import React from "react";
import Link from "next/link";
import Icon from "feather-icons-react";
import styles from "../styles/components/Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <h3 className={styles.brandName}>SaneSource</h3>
            <p className={styles.brandDescription}>
              A sane approach to open source. Building useful tools with AI, one
              step at a time.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Quick Links</h4>
            <div className={styles.footerLinks}>
              <Link href="#projects">
                <a className={styles.footerLink}>Projects</a>
              </Link>
              <Link href="#about">
                <a className={styles.footerLink}>About</a>
              </Link>
              <Link href="#contact">
                <a className={styles.footerLink}>Contact</a>
              </Link>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Contact</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Icon icon="mail" size={16} />
                </div>
                <a href="mailto:contact@sanesource.org">
                  contact@sanesource.org
                </a>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Icon icon="github" size={16} />
                </div>
                <a
                  href="https://github.com/sanesource"
                  target="_blank"
                  rel="noreferrer"
                >
                  @sanesource
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} SaneSource. All rights reserved.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/sanesource"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <Icon icon="github" size={20} />
            </a>
            <a
              href="https://twitter.com/sanesource"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="Twitter"
            >
              <Icon icon="twitter" size={20} />
            </a>
            <a
              href="https://www.instagram.com/sanesourceorg/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <Icon icon="instagram" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
