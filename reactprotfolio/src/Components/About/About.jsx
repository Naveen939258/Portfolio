import React from "react";
import styles from "./About.module.css";
import { FaUser } from "react-icons/fa";
export const About = () => {
  return (
    <section className={styles.container}>
              <h2 className={styles.icon}><FaUser className={styles.icon} /></h2>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.subtitle}>A little bit about my journey, passion, and expertise.</p>

      <div className={styles.aboutContent}>
        <div className={styles.bioBox}>
          <p>
Hi, I'm Kakarla Naveen, a passionate Computer Science Engineering student with a specialization in Artificial Intelligence and Intelligent Automation. I love building smart, scalable solutions that solve real-world problems and create meaningful user experiences. I'm also a proactive learner who thrives in collaborative environments and embraces challenges to grow continuously.          </p>
        </div>

        <div className={styles.strengthBox}>
          <h3>Core Strengths:</h3><br></br>
          <ul>
            <li>✅ End-to-end development expertise across frontend, backend, and intelligent systems.</li>
            <li>✅ Strong grasp of clean architecture and responsive, user-focused design.</li>
            <li>✅ Skilled in writing scalable, maintainable, and performance-driven code.</li>
          </ul>
        </div>
        <div className={styles.bottomBox}>
          <p>
            I believe that exceptional software is born from a deep understanding of user needs,
            combined with technical excellence and thoughtful design. My approach centers on building
            systems that are intuitive, maintainable, and performance-driven. I value clean architecture,
            collaborative development, and continuous improvement. With a strong interest in the evolving
            intersection of technology and intelligence, I actively explore how emerging tools and ideas can
            be used to create smarter, more adaptive digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};
