import { useState } from 'react';
import styles from "./App.module.css";

import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import Certificates from './Components/Certificates/Certificates';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />

      {/* ✅ Add matching IDs for react-scroll */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="certificates">
        <Certificates />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
