import ProjectList from "../components/Projects/ProjectList";
import styles from "../styles/Home.module.css";

const projects = [
  {
    title: "next-personal-blog-template",
    description: null,
    stars: 1,
    languages: ["TypeScript"],
    link: "https://github.com/sanesource/next-personal-blog-template",
  },
  {
    title: "sofit",
    description: "StackOverFlow IT",
    stars: 1,
    languages: ["Python"],
    link: "https://github.com/sanesource/sofit",
  },
  {
    title: "easyread",
    description: "Easily read books, anytime, anywhere.",
    stars: 3,
    languages: ["TypeScript"],
    link: "https://github.com/sanesource/easyread",
  },
  {
    title: "middle",
    description: null,
    stars: 6,
    languages: ["Shell"],
    link: "https://github.com/sanesource/middle",
  },
  {
    title: "cra",
    description: "Minimal Create-React-App",
    stars: 0,
    languages: ["Shell"],
    link: "https://github.com/sanesource/cra",
  },
  {
    title: "sanesource.org",
    description: null,
    stars: 0,
    languages: ["HTML"],
    link: "https://github.com/sanesource/sanesource.org",
  },
];

function Index() {
  return (
    <>
      <div className={styles.banner}>
        <h1>SaneSource</h1>
        <p>A sane way to OpenSource</p>
      </div>
      <ProjectList projects={projects} />
    </>
  );
}

Index.title = "SaneSource";

export default Index;
