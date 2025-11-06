

import React from "react";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}><br></br><br></br><br></br><br></br><br></br>
        <h1 className={styles.title}>Hi, I'm Naveen</h1>
        <p className={styles.description}>
          Computer Science Engineer Aspirant & Artificial Intelligence Automation Enthusiast
        </p>
        <p className={styles.type}>
            CSE Honours Student | Architecting AI-powered automation to streamline processes and spark innovation
        </p>
        <a
          href="https://drive.google.com/file/d/1DygFfi6pfGNVd_zMhX_mD-f6uugf-LEA/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          Resume
        </a>
      </div>

      <img
  src="/assets/home/hero1.jpg"
  alt="Hero image of me"
  className={styles.heroImg}
/>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
