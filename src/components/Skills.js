import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaFigma,
  FaJediOrder,
  FaUniversalAccess,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiJest,
  SiTestinglibrary,
  SiJquery,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import "../styles/Skills.css";

const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Context API", icon: <FaJediOrder /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "React Testing Library", icon: <SiTestinglibrary /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "jQuery", icon: <SiJquery /> },
  { name: "RTK", icon: <SiRedux /> },
  { name: "Responsive Design", icon: <MdDesignServices /> },
  { name: "Accessibility", icon: <FaUniversalAccess /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
