import React from "react";
import styles from "./Skills.module.css";
import { FaTools } from "react-icons/fa";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", level: 85 },
      { name: "Java", level: 85 },
      { name: "Python", level: 60 },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Coursework",
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Database Management Systems", level: 85 },
      { name: "Computer Networks", level: 50 },
      { name: "Operating Systems", level: 85 },
      { name: "Machine Learning", level: 80 },
      { name: "Deep Learning", level: 80 },
    ],
  },
  {
    category: "Full Stack Tools/Frameworks",
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "Node.js / Express", level: 85 },
      { name: "Spring Boot / Hibernate", level: 80 },
      { name: "HTML / Tailwind / Bootstrap", level: 80 },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "AWS Services", level: 85 },
      { name: "Git / GitHub", level: 80 },
      { name: "Render / Netlify", level: 80 },
    ],
  },
];

const softSkills = [
  { name: "Communication", level: 90 },
  { name: "Teamwork", level: 85 },
  { name: "Problem Solving", level: 90 },
  { name: "Leadership", level: 80 },
  { name: "Time Management", level: 80 },
  { name: "Adaptability", level: 90 },
];

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.icon}><FaTools /></h2>
      <h1 className={styles.title}>Skills & Expertise</h1>
      <p className={styles.subtitle}>A comprehensive overview of my technical abilities and soft skills.</p>

      <div className={styles.skillsGrid}>
        {skillsData.map((category, index) => (
          <div key={index} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            {category.skills.map((skill, i) => (
              <div key={i} className={styles.skillBar}>
                <span className={styles.skillLabel}>{skill.name}</span>
                <div className={styles.progress}>
                  <div className={styles.progressInner} style={{ width: `${skill.level}%` }}>
                    <span className={styles.percentage}>{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Soft Skills */}
        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>Soft Skills</h3>
          {softSkills.map((skill, i) => (
            <div key={i} className={styles.skillBar}>
              <span className={styles.skillLabel}>{skill.name}</span>
              <div className={styles.progress}>
                <div className={styles.progressInner} style={{ width: `${skill.level}%` }}>
                  <span className={styles.percentage}>{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
