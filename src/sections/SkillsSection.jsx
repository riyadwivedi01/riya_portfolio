
// Skills Section
import React from "react";
import { motion } from "framer-motion";
import { PenTool, Server, Code, Cpu } from "lucide-react"; 
import { SectionTitle } from '../components/SectionTitle';

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const skillsData = [
  { name: 'Frontend', icon: <PenTool />, description: "HTML, CSS, JavaScript, React.js" },
  { name: 'Backend', icon: <Server />, description: "Node.js, MongoDB, RESTful APIs, MySQL" },
  { name: 'Programming', icon: <Code />, description: "JavaScript, C++, Python(Basic)" },
  { name: 'Tools', icon: <Cpu />, description: "Figma, VS Code, Canva, Oracle, Git" },
];

const SkillsSection = () => (
  <section id="skills" className="container section-padding">
    <SectionTitle>My Expertise</SectionTitle>
    <motion.div 
        className="skills-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
    >
      {skillsData.map((skill) => (
        <motion.div 
          key={skill.name}
          className="skill-card"
          variants={fadeInItem}
        >
          <div className="skill-icon-wrapper">
            {React.cloneElement(skill.icon, { size: 40, strokeWidth: 1.5 })}
          </div>
          <h3>{skill.name}</h3>
          <p>{skill.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);
export default SkillsSection;