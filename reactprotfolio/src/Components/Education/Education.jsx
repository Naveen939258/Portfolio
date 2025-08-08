// education.jsx
import React from "react";
import styles from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section className={styles.educationSection}>
      <h2 className={styles.icon}><FaGraduationCap className={styles.icon} /></h2>
      <h1 className={styles.title}>Education</h1>
      <p className={styles.subtitle}>My academic background and qualifications.</p>

      <div className={styles.timeline}>
        {/* B.Tech */}
        <div className={styles.timelineItem}>
          <div className={styles.badgeWrapper}>
            <img
              src="/assets/education/edu1.jfif"
              alt="KLU Logo"
              className={styles.badge}
            />
            <div className={styles.line}></div>
          </div>

          <div className={styles.contentBox}>
            <h3 className={styles.degree}>
              Bachelor of Technology in Computer Science Engineering (Honors)
            </h3>
            <p className={styles.university}><strong>Koneru Lakshmaiah University – (Vijayawada)</strong></p>
            <p className={styles.grade}>Grade: CGPA: 9.5/10.0 (Expected)</p>
            <p className={styles.description}>
              Pursuing B.Tech in Computer Science Engineering with Honors. Specialized in Artificial Intelligence and
              Process Automation under the university’s flexible academic framework.
            </p>
            <span className={styles.duration}>2022 – 2026</span>
          </div>
        </div>

        {/* Intermediate */}
        <div className={styles.timelineItem}>
          <div className={styles.badgeWrapper}>
            <img
              src="/assets/education/edu3.jfif"
              alt="sasi jr Logo"
              className={styles.badge}
            />
            <div className={styles.line}></div>
          </div>

          <div className={styles.contentBox}>
            <h3 className={styles.degree}>Intermediate – MPC</h3>
            <p className={styles.university}><strong>Sasi Junior College – (Rajahmundry)</strong></p>
            <p className={styles.grade}>Score: 93.9%</p>
            <p className={styles.description}>
              Studied Mathematics, Physics, and Chemistry. Developed a strong base in problem-solving and logical reasoning.
            </p>
            <span className={styles.duration}>2020 – 2022</span>
          </div>
        </div>

        {/* 10th Grade */}
        <div className={styles.timelineItem}>
          <div className={styles.badgeWrapper}>
            <img
              src="/assets/education/edu2.jpg"
              alt="bhashyam School Logo"
              className={styles.badge}
            />
          </div>

          <div className={styles.contentBox}>
            <h3 className={styles.degree}>Secondary Schooling - SSC</h3>
            <p className={styles.university}><strong>Bhashyam High School – (Rajahmundry)</strong></p>
            <p className={styles.grade}>Score: 10.0 GPA</p>
            <p className={styles.description}>
              Completed SSC with distinction, building a strong academic foundation and discipline across all subjects.
            </p>
            <span className={styles.duration}>2019 – 2020</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
