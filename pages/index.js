import { useEffect, useState } from "react";
import githubService from "../services/GithubAPIService";
import ProjectList from "../components/Projects/ProjectList";
import styles from "../styles/Home.module.css";

function Index() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    githubService.getProjects(6, {}, (err, data) => {
      if (err) return;
      const projects = data.map(githubService.getFormattedRepo);
      setProjects(projects);
    });
  }, []);

  return (
    <section>
      <div className={styles.banner}>
        <h1>SaneSource</h1>
        <p>A sane way to OpenSource</p>
      </div>
      <section className={styles.projects} id="projects">
        <ProjectList projects={projects} />
      </section>
    </section>
  );
}

Index.title = "SaneSource";

export default Index;
