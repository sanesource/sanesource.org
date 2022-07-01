import React from "react";
import Icon from "feather-icons-react";
import styles from "../../styles/components/Project.module.css";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div className={styles.projectsWrapper}>
      <h2>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
