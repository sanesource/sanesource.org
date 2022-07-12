import React from "react";
import styles from "../../styles/components/Project.module.css";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  if (!projects || projects?.length === 0) {
    return null;
  }

  return (
    <div className={styles.projectsWrapper}>
      <h2>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <button>
        <a
          href="https://github.com/orgs/sanesource/repositories"
          target="_blank"
          rel="noreferrer"
        >
          Explore all
        </a>
      </button>
    </div>
  );
}

export default ProjectList;
