import React, { useState } from 'react';
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
            <li><a href="#" onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a href="#" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a href="#" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#" onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a href="#" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <h2>Welcome to My Portfolio</h2>
          <p>Passionate Computer Engineering student and aspiring Web Developer, eager to build innovative solutions.</p>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>Hello! I'm Pushkar Choudhary, a recent graduate in Computer Engineering. As a fresher, I'm enthusiastic about web development, with a focus on creating user-friendly and responsive websites. I love learning new technologies and applying them to real-world problems.</p>
        </section>
        <section id="skills">
          <h2>Skills</h2>
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
          <h2>Projects</h2>
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
          <h2>Education</h2>
          <p><strong>Bachelor of Engineering in Computer Engineering</strong><br />
          MIT Academy of Engineering, Pune, Graduation Year: 2025<br />
          CGPA: 8.5/10</p>
          <p><strong>Higher Secondary Certificate (HSC)</strong><br />
          MIT jr College Nanded, Year: 2021<br />
          Percentage: 83.33%</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: Pushkarchoudhary362@gmail.com</p>
          <p>Phone: +91 7588847171</p>
          <p>GitHub: <a href="https://github.com/Pushkar1306">github.com/Pushkar1306</a></p>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 Pushkar Choudhary. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;