import React from "react";
import styles from "./Certificates.module.css";
import { FaCertificate } from "react-icons/fa";
import { FaCalendarAlt, FaIdBadge } from "react-icons/fa";



const certificates = [
  {
    title: "Red Hat Certified Enterprise Application Developer",
    issuer: "Red Hat",
    issued: "September 25, 2024",
    id: "240-198-960",
    description:
      "Proficiency in developing enterprise applications using Java EE, JBoss EAP, and OpenShift.",
    logo: "/assets/certificates/redhat.jfif", // ✅ public path
    credentialUrl: "https://rhtapps.redhat.com/verify?certId=240-198-960",
  },
 {
  title: "NPTEL Online Certification - Programming in Java",
  issuer: "NPTEL - IIT Kharagpur",
  issued: "October 2023",
  id: "NPTEL23CS74S74980009220272911",
  description:
    "Elite certification awarded for successfully completing the NPTEL course on Programming in Java with a consolidated score of 62%. The course covered Java fundamentals, OOP concepts, exception handling, multithreading, and JDBC.",
  logo: "/assets/certificates/nptel.jpeg", // ✅ public path
  credentialUrl: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs74/Course/NPTEL23CS74S74980009220272911.pdf"
},

  {
    title: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    issued: "October 2024",
    id: "5069309",
    description:
      "Foundational knowledge of AI and Salesforce technologies including Einstein GPT, data modeling, and AI ethics.",
    logo: "/assets/certificates/salesforce.png", // ✅
    credentialUrl: "https://drive.google.com/file/d/1-2kjxnuLEG0MtyQWsPiDLKheP10szs6N/view?usp=sharing",
  },
  {
    title: "Automation Anywhere Certified Essentials RPA Professional 2023",
    issuer: "Automation Anywhere",
    issued: "February 2025",
    id: "AAESSE2024A360 - 133667049",
    description:
      "Foundational RPA knowledge and hands-on skills in bot creation, deployment, and management.",
    logo: "/assets/certificates/Auto.jfif", // ✅
    credentialUrl: "https://certificates.automationanywhere.com/09727b9b-aea2-4ca0-80d1-fe039e08c153#acc.Erx7QUXY",
  },
  {
    title: "Rest API Certificate(Intermediate)",
    issuer: "HackerRank",
    issued: "November 05, 2024",
    id: "6F9E4A044522",
    description:
      "Validates my ability to design, develop, and optimize RESTful web services for modern applications.",
    logo: "/assets/certificates/hackerrank.png", // Example – update as needed
    credentialUrl: "https://www.hackerrank.com/certificates/6f9e4a044522",
  },
  {
    title: "Multicloud Network Associate",
    issuer: "Aviatrix",
    issued: "February 07, 2025",
    id: "2965bbd5-9de6-4643-81fe-53df82df7776",
    description:
      "Multicloud networking, cloud security, routing, and automation using Aviatrix technologies.",
    logo: "/assets/certificates/Aviatrix.png", // ✅
    credentialUrl: "https://www.credly.com/badges/2965bbd5-9de6-4643-81fe-53df82df7776/linked_in_profile",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    issued: "March 13, 2025",
    id: "6f7bd54e2489",
    description:
      "Showcases expertise in front-end development using React, CSS, and JavaScript to build interactive and responsive user interfaces.",
    logo: "/assets/certificates/hackerrank.png", // Example – update as needed
    credentialUrl: "https://www.hackerrank.com/certificates/6f7bd54e2489",
  },
];

const Certificates = () => {
  return (
    <section className={styles.certSection}>
      <h2 className={styles.icon}><FaCertificate /></h2>
      <h1 className={styles.title}>My Certifications</h1>
      <p className={styles.subtitle}>
        Showcasing my validated skills and commitment to continuous learning.
      </p>

      <div className={styles.certGrid}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <img src={cert.logo} alt={`${cert.issuer} logo`} className={styles.logo} />
              <div>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>
              </div>
            </div>
            <p className={styles.description}>{cert.description}</p>
            <div className={styles.meta}><br></br><br></br>
              <p><FaCalendarAlt /> Issued: {cert.issued}</p>
              <p><FaIdBadge /> ID: {cert.id}</p>
            </div>
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewBtn}
            >
              <FaCertificate /> View Credentials
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
