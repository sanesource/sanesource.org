import { useEffect, useState } from "react";
import Icon from "feather-icons-react";
import githubService from "../services/GithubAPIService";
import styles from "../styles/Home.module.css";

function Index() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    githubService.getProjects(6, {}, (err, data) => {
      if (err) return;
      const projects = data
        .map(githubService.getFormattedRepo)
        .sort((a, b) => b.stars - a.stars);
      setProjects(projects);
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>SaneSource</h1>
          <p className={styles.heroSubtitle}>
            A sane approach to open source. Building useful tools with AI, one
            step at a time.
          </p>
          <div className={styles.heroButtons}>
            <a href="#projects" className={styles.btnPrimary}>
              Explore Projects
              <Icon icon="arrow-right" size={20} />
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`${styles.section} container`} id="projects">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionDescription}>
            Explore our open source projects that are making a difference
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>
                <div className={styles.projectStars}>
                  <Icon icon="star" size={16} />
                  {project.stars}
                </div>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTags}>
                {project.languages.map((lang) => (
                  <span key={lang} className={styles.projectTag}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="https://github.com/orgs/sanesource/repositories"
            target="_blank"
            rel="noreferrer"
            className={styles.exploreButton}
          >
            View All Projects
            <Icon icon="external-link" size={20} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className={`${styles.section} container`} id="about">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>About Us</h2>
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.aboutCard}>
            <blockquote className={styles.aboutQuote}>
              An aspiring and <em>sane</em> organisation aiming to build cool
              and helpful opensource software leveraging AI.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`${styles.section} container`} id="contact">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.contactIcon}>
            <Icon icon="mail" size={40} />
          </div>
          <h3 className={styles.contactTitle}>Let's Work Together</h3>
          <p className={styles.contactText}>
            Have a question or want to collaborate? We&apos;d love to hear from
            you!
          </p>
          <a
            href="mailto:contact@sanesource.org"
            className={styles.contactButton}
          >
            <Icon icon="mail" size={20} />
            contact@sanesource.org
          </a>
        </div>
      </section>
    </>
  );
}

Index.title = "SaneSource";

export default Index;
