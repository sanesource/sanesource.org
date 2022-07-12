import React from "react";
import styles from "../../styles/Home.module.css";

function About() {
  return (
    <div className={styles.wrapper}>
      <h2>About</h2>
      <q>
        An aspiring and&nbsp;
        <i>
          <u>sane</u>
        </i>
        &nbsp;organisation aiming to build cool and helpful opensource software.
      </q>
    </div>
  );
}

export default About;
