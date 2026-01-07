// About Section
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail} from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section id="about" ref={ref} className="container section-padding">
            <SectionTitle>About Me</SectionTitle>
            <div className="about-grid">

                {/* ---------- IMAGE SECTION ---------- */}
                <motion.div 
                    className="about-image-container"
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                    <div className="about-image-wrapper">
                        <img 
                            src="Riyaa.jpeg" 
                            alt="Profile" 
                            className="about-image"
                        />
                        <div className="about-image-overlay"></div>
                    </div>
                </motion.div>

                {/* ---------- CONTENT SECTION ---------- */}
                <motion.div 
                    className="about-content"
                    initial={{ opacity: 0, x: 100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                >
                    <p className="about-text">
                        Hi, I am Riya, final-year Computer Science Engineering student passionate about frontend development and web technologies. 
                        I enjoy turning ideas into interactive and user-friendly digital solutions while continuously improving my skills.
                    </p>

                    <p className="about-text">
                        I have hands-on experience with React.js, Node.js, and the modern JavaScript ecosystem, focusing on clean code and building user-friendly applications.
                    </p>

                    <div className="about-links">

                        {/* ---------- RESUME BUTTON WITH DRIVE LINK ---------- */}
                 <motion.a
                        href="https://drive.google.com/file/d/1LX81IaXgWOtzaf4T1NYTkDhmuFH9K0il/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                        whileHover={{ y: -2 }}
                         >
                     View Resume <span style={{ fontSize: "14px" }}>🔗</span>
                    </motion.a>



                        {/* ---------- SOCIAL LINKS ---------- */}
                        <div className="social-links">
                            <motion.a href="https://github.com/riyadwivedi01" whileHover={{ scale: 1.1, y: -2 }}>
                                <Github className="social-icon" size={28} />
                            </motion.a>

                            <motion.a href="https://www.linkedin.com/in/riya-dwivedi-2788162a5/" whileHover={{ scale: 1.1, y: -2 }}>
                                <Linkedin className="social-icon" size={28} />
                            </motion.a>

                            <motion.a href="mailto:dwivediriya752@gmail.com" whileHover={{ scale: 1.1, y: -2 }}>
                                <Mail className="social-icon" size={28} />
                            </motion.a>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
