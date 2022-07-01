import React from "react";
import styles from "../../styles/components/Project.module.css";
import Icon from "feather-icons-react";

function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <div>
        <strong>
          <a href={project.link} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </strong>
        <span>
          <Icon size={22} icon="star" />
          &nbsp;{project.stars}
        </span>
      </div>
      <p>{project.description}</p>
      <div>
        {project.languages.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
