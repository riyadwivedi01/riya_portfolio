
// About Section
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import  { SectionTitle } from "../components/SectionTitle";
const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section id="about" ref={ref} className="container section-padding">
            <SectionTitle>About Me</SectionTitle>
            <div className="about-grid">
                <motion.div 
                    className="about-image-container"
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                    <div className="about-image-wrapper">
                        <img 
                            src="riya.jpg" 
                            alt="Profile" 
                            className="about-image"
                        />
                        <div className="about-image-overlay"></div>
                    </div>
                </motion.div>
                <motion.div 
                    className="about-content"
                    initial={{ opacity: 0, x: 100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                >
                    <p className="about-text">
                        Hi, I am Riya, final-year Computer Science Engineering student passionate about frontend development and web technologies. I enjoy turning ideas into interactive and user-friendly digital solutions while continuously improving my skills in modern tools and frameworks.
                        I am eager to learn, explore new technologies, and contribute to meaningful projects as a Frontend Developer / Software Engineer.
                    </p>
                    <p className="about-text">
                        I have hands-on experience with React.js, Node.js, and the modern JavaScript ecosystem, focusing on writing clean code and building user-friendly applications.
                    </p>
                    <div className="about-links">
                        <motion.a
                            href="Riya_final_resume.pdf"
                            download
                            className="resume-button"
                            whileHover={{ y: -2 }}
                        >
                            Download Resume <Download size={18} />
                        </motion.a>
                        <div className="social-links">
                            <motion.a href="https://github.com/riyadwivedi01" whileHover={{ scale: 1.1, y: -2 }}><Github className="social-icon" size={28} /></motion.a>
                            <motion.a href="https://www.linkedin.com/in/riya-dwivedi-2788162a5/" whileHover={{ scale: 1.1, y: -2 }}><Linkedin className="social-icon" size={28} /></motion.a>
                            <motion.a href="mailto:dwivediriya752@gmail.com" whileHover={{ scale: 1.1, y: -2 }}><Mail className="social-icon" size={28} /></motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default AboutSection;
