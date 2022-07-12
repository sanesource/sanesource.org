import React from "react";
import styles from "../../styles/Home.module.css";

function Contact() {
  return (
    <div className={styles.wrapper}>
      <h2>Contact</h2>
      <p>
        You can contact us at -&nbsp;
        <u>
          <i>
            <a href="mailto:akul.sanesource@gmail.com">
              akul.sanesource@gmail.com
            </a>
          </i>
        </u>
      </p>
    </div>
  );
}

export default Contact;
