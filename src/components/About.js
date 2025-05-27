import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-left">
        <img src="/profile.jpg" alt="Profile" className="about-image" />
      </div>
      <div className="about-right">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I'm a passionate <strong>Frontend Developer</strong> with a strong focus on creating
          clean, scalable, and accessible user interfaces using <strong>React.js</strong>,
          <strong>Redux</strong>, and modern tools like <strong>Context API</strong>,
          <strong>Jest</strong>, and <strong>RTK</strong>. I specialize in crafting responsive,
          pixel-perfect experiences and enjoy collaborating with teams to deliver high-impact,
          high-performance solutions.
        </p>
        <p className="about-highlight">
          Tech Stack: HTML5, CSS3, JavaScript, React, Redux, Tailwind, Bootstrap, jQuery, Figma,
          Testing Library, Accessibility
        </p>
        <a href="/Rakesh_Resume.pdf" download className="download-cv-btn">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
