import React, { useState } from "react";
import styles from "./Projects.module.css";
import { FaProjectDiagram } from "react-icons/fa";

const stats = [
  { label: "Projects", value: 8 },
  { label: "Technologies", value: 20 },
  { label: "Featured", value: 2 },
  { label: "Categories", value: 2 },
];

const categories = ["All", "Full Stack", "AI/ML"];

const projectsData = [
  {
    title: "Full-Stack eCommerce Platform",
    category: "Full Stack",
    description:
      "A scalable full-stack eCommerce platform with modern UI/UX, Razorpay payments, real-time inventory, and an admin dashboard.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay API",
      "NodeMailer",
      "cloudinary",
      "JWT",
      "Render/Netlify",
    ],
    image: "/assets/projects/project1.jpg",
    liveDemo: "https://snapcartuser.netlify.app/",
    code: "https://github.com/Naveen939258/E-commerce-SnapCart",
    status: "Featured",
  },{
    title: "Online Donation Platform",
    category: "Full Stack",
    description:
      "A social impact web platform that enables users to donate seamlessly for verified causes, track contributions in real time, and manage NGO campaigns through an admin dashboard.",
    techStack: [
      "React.js",
      "Spring Boot",
      "MySQL / Supabase",
      "Cloudinary",
      "JWT",
      "Razorpay API",
      "Render / Netlify",
    ],
    image: "/assets/projects/online.png",
    liveDemo: "https://your-donation-frontend-link.netlify.app/",
    code: "https://github.com/Naveen939258/Online-Donation-Platform",
    status: "Completed",
  },
  {
    title: "Subscription Management System",
    category: "Full Stack",
    description:
      "A subscription and billing management system for broadband and mobile services, featuring Razorpay payments, promo code support, and AI-powered plan recommendations for users and admins.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay API",
      "JWT",
      "Cloudinary",
      "Render / Netlify",
    ],
    image: "/assets/projects/subscription.png",
    liveDemo: "https://subscriptionuser.netlify.app/",
    code: "https://github.com/Naveen939258/Subscription-management",
    status: "Completed",
  },
  {
    title: "Scholarship Tracker System",
    category: "Full Stack",
    description:
      "A full-stack scholarship management portal that allows students to apply, upload documents, and track progress in real time, while admins can manage scholarships, applications, and analytics via an intuitive dashboard.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "JWT",
      "jsPDF",
      "Render / Netlify",
    ],
    image: "/assets/projects/scholarship.png",
    liveDemo: "https://scholarshiptracker.netlify.app/",
    code: "https://github.com/Naveen939258/Scholarshiptracker",
    status: "Completed",
  },
  {
    title: "Academic Student Course Registration System",
    category: "Full Stack",
    description:
      "Academic Course Registration System for streamlined enrollment, prerequisite checks, and centralized course management.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Render",
    ],
    image: "/assets/projects/project2.jfif",
    liveDemo: "https://reactproject-frontend-b592.onrender.com/",
    code: "https://github.com/Naveen939258/REACTPROJECT",
    status: "Featured",
  },
  {
    title: "Career Guidance and Counseling Platform",
    category: "Full Stack",
    description:
      "Career Guidance Platform offering personalized mentorship, career insights, and resources to support informed academic and professional decisions.",
    techStack: [
      "React.js",
      "SpringBoot",
      "MySql",
      "Tailwind CSS",
      "Render",
    ],
    image: "/assets/projects/project3.png",
    liveDemo: "https://counselingplatform.onrender.com/",
    code: "https://github.com/Naveen939258/Counselingplatform",
    status: "Completed",
  },
  {
    title: "Predictive Analytics on Renewable Energy Generation",
    category: "AI/ML",
    description:
      "ML platform predicting solar/wind energy using historical and weather data with advanced models.",
    techStack: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Matplotlib",
      "Google Cloud AI",
      "Deep Learning Models",
    ],
    image: "/assets/projects/picture4.png",
    liveDemo: null,
    code: "https://github.com/Naveen939258/Cloud-Project-On-Predective-Analytics-for-Renewable-Energy-Generation-Using-ML-DL-Models-main/tree/main",
    status: "Completed",
  },
  {
    title: "Deep Learning-Based Fruit Image Classifier",
    category: "AI/ML",
    description:
      "CNN-based fruit classifier with image preprocessing and augmentation for higher accuracy.",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Jupyter Notebook",
      "Deep Learning Models",
      "Streamlit",
    ],
    image: "/assets/projects/project5.png",
    liveDemo: null,
    code: "https://github.com/Naveen939258/Deeplearning",
    status: "Completed",
  },
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.icon}>
        <FaProjectDiagram />
      </h2>
      <h1 className={styles.heading}>Featured Projects</h1>
      <p className={styles.subheading}>
        Explore my latest work and creative solutions. Each project represents a
        unique challenge and innovative approach to modern development.
      </p>

      {/* Stats */}
      <div className={styles.stats}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.statCard}>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search projects..."
        className={styles.search}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Categories */}
      <div className={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.categoryBtn} ${
              activeCategory === cat ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className={styles.projectGrid}>
        {filteredProjects.map((project, i) => (
          <div key={i} className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={project.title} />
              <span
                className={`${styles.badge} ${
                  project.status === "Featured"
                    ? styles.featuredBadge
                    : styles.completedBadge
                }`}
              >
                {project.status}
              </span>
            </div>
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <span className={styles.categoryTag}>{project.category}</span>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.techStack}>
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.actions}>
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
                {project.code && (
                  <a href={project.code} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
