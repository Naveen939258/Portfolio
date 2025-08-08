// Experience.jsx
import React from "react";
import styles from "./Experience.module.css";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.icon}><FaBriefcase className={styles.icon} /></h2>
      <h1 className={styles.title}>Work Experience</h1>
      <p className={styles.subtitle}>My professional journey and key accomplishments.</p>

      <div className={styles.timeline}>
        {/* AWS Data Engineering */}
        <div className={styles.timelineItem}>
          <div className={styles.badgeWrapper}>
            <img
              src="/assets/experience/aws.png"
              alt="AICTE AWS Logo"
              className={styles.badge}
            />
            <div className={styles.line}></div>
          </div>

          <div className={styles.contentBox}>
            <h3 className={styles.role}>Data Engineering Virtual Intern</h3>
            <p className={styles.company}><strong>AICTE | AWS Academy</strong></p>
            <p className={styles.description}>
              Completed a 10-week virtual internship focused on modern data engineering workflows and cloud-based data pipeline development.
              Built scalable data pipelines using AWS services like S3, Redshift, Glue, and Lambda. Implemented ETL processes and worked with both SQL and NoSQL data systems.
            </p>
            <span className={styles.duration}>July 2024 – Sep 2024</span>
          </div>
        </div>

        {/* Google AI/ML */}
        <div className={styles.timelineItem}>
          <div className={styles.badgeWrapper}>
            <img
              src="/assets/experience/google.png"
              alt="Google Eduskills Logo"
              className={styles.badge}
            />
            <div className={styles.line}></div>
          </div>

          <div className={styles.contentBox}>
            <h3 className={styles.role}>AI-ML Virtual Intern</h3>
            <p className={styles.company}><strong>Eduskills | Google for Developers | India Edu Program</strong></p>
            <p className={styles.description}>
              Completed a 10-week AI/ML internship. Worked on neural networks, image classification, and product search using TensorFlow. Gained hands-on experience training and deploying models, focusing on computer vision and model optimization.
            </p>
            <span className={styles.duration}>Jul 2024 – Sep 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
