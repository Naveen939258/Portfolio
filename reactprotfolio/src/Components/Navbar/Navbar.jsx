import React, { useState } from "react";
import { Link } from "react-scroll"; // ✅ Smooth scrolling
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo / Title */}
      <a className={styles.title} href="/">
        Kakarla Naveen
      </a>

      {/* Menu Button for Mobile */}
      <img
        className={styles.menuBtn}
        src={menuOpen ? "/assets/nav/closeIcon.png" : "/assets/nav/menuIcon.png"}
        alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Menu Items */}
      <div className={styles.menu}>
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="home" smooth={true} duration={50} spy={true} offset={-70} activeClass={styles.active}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={50} spy={true} offset={-70} activeClass={styles.active}>
              About
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={50} spy={true} offset={-70} activeClass={styles.active}>
              Education
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={50} spy={true} offset={-70} activeClass={styles.active}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={50} spy={true} offset={-70} activeClass={styles.active}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="certificates" smooth={true} duration={50} spy={true} offset={-70} activeClass={styles.active}>
              Certificates
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={50} spy={true} offset={-70} activeClass={styles.active}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={50} spy={true} offset={-70} activeClass={styles.active}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
