import React, { useState } from 'react';
import { FaUser, FaCode, FaProjectDiagram, FaGraduationCap, FaEnvelope, FaSignInAlt, FaRocket, FaInfoCircle, FaTools, FaFolderOpen, FaUniversity, FaAddressBook, FaPhone } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './portfolio.css';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="portfolio">
      <header>
        <h1>Pushkar Choudhary - Web Developer</h1>
        <nav>
          <ul>
            <li><a href="#" onClick={() => scrollToSection('hero')}><FaRocket /> Home</a></li>
            <li><a href="#" onClick={() => scrollToSection('about')}><FaUser /> About</a></li>
            <li><a href="#" onClick={() => scrollToSection('skills')}><FaCode /> Skills</a></li>
            <li><a href="#" onClick={() => scrollToSection('projects')}><FaProjectDiagram /> Projects</a></li>
            <li><a href="#" onClick={() => scrollToSection('education')}><FaGraduationCap /> Education</a></li>
            <li><a href="#" onClick={() => scrollToSection('contact')}><FaEnvelope /> Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <h2><FaRocket /> Welcome to My Portfolio</h2>
          <p>Passionate Computer Engineering student and aspiring Web Developer, eager to build innovative solutions.</p>
        </section>
        <section id="about">
          <h2><FaInfoCircle /> About Me</h2>
          <p>Hello! I'm Pushkar Choudhary, a recent graduate in Computer Engineering. As a fresher, I'm enthusiastic about web development, with a focus on creating user-friendly and responsive websites. I love learning new technologies and applying them to real-world problems.</p>
        </section>
        <section id="skills">
          <h2><FaTools /> Skills</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Node.js</li>
            <li>Python, Java</li>
            <li>Git, GitHub</li>
            <li>Responsive Design</li>
            <li>Database Management (SQL, MongoDB)</li>
          </ul>
        </section>
        <section id="projects">
          <h2><FaFolderOpen /> Projects</h2>
          <div className="project">
            <h3><a href="https://github.com/Pushkar1306/E-plantshopping">E-plantshopping</a></h3>
            <p>An e-commerce platform for plant shopping built with JavaScript.</p>
          </div>
          <div className="project">
            <h3><a href="https://github.com/Pushkar1306/Localrepo">Localrepo</a></h3>
            <p>A local repository project using CSS.</p>
          </div>
          <div className="project">
            <h3><a href="https://github.com/Pushkar1306/Portfolio">Portfolio</a></h3>
            <p>A personal portfolio showcasing my projects, skills, and achievements. Built to highlight coding expertise, creative problem-solving, and continuous learning.</p>
          </div>
        </section>
        <section id="education">
          <h2><FaUniversity /> Education</h2>
          <p><strong>Bachelor of Engineering in Computer Engineering</strong><br />
          MIT Academy of Engineering, Pune, Graduation Year: 2025<br />
          CGPA: 8.5/10</p>
          <p><strong>Higher Secondary Certificate (HSC)</strong><br />
          MIT jr College Nanded, Year: 2021<br />
          Percentage: 83.33%</p>
        </section>
        <section id="contact">
          <h2><FaAddressBook /> Contact</h2>
          <p><FaEnvelope /> Email: Pushkarchoudhary362@gmail.com</p>
          <p><FaPhone /> Phone: +91 7588847171</p>
          <p><FaGithub /> GitHub: <a href="https://github.com/Pushkar1306">github.com/Pushkar1306</a></p>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 Pushkar Choudhary. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;