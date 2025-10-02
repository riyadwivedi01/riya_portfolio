// import React from 'react';
// import './index.css';

// // Import your components from their respective folders
// import CustomCursor from './components/CustomCursor'; // Correct import path
// import Header from './components/Header';
// import HeroSection from './sections/HeroSection';
// import AboutSection from './sections/AboutSection';
// import SkillsSection from './sections/SkillsSection';
// import ExperienceSection from './sections/ExperienceSection';
// import ProjectsSection from './sections/ProjectsSection';
// import EducationSection from './sections/EducationSection';
// import CertificationsSection from './sections/CertificationsSection';
// import Footer from './components/Footer';

// // Main App Component
// export default function App() {
  
//   return (
//     <div className="app-wrapper">
//       <CustomCursor />
//       <Header />
//       <main>
//         <HeroSection />
//         <AboutSection />
//         <SkillsSection />
//         <ExperienceSection />
//         <ProjectsSection />
//         <EducationSection />
//         <CertificationsSection />
//       </main>
//       <Footer />
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import "./index.css";

import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import CertificationsSection from "./sections/CertificationsSection";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      <CustomCursor />
      <Header activeSection={activeSection} />
      <main>
        <section id="home"><HeroSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="skills"><SkillsSection /></section>
        <section id="experience"><ExperienceSection /></section>
        <section id="projects"><ProjectsSection /></section>
        <section id="education"><EducationSection /></section>
        <section id="certifications"><CertificationsSection /></section>
      </main>
      <Footer />
    </div>
  );
}
