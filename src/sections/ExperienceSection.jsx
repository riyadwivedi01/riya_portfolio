// Experience Section
import React from "react";
import { SectionTitle } from '../components/SectionTitle';
import { motion } from 'framer-motion';
const experienceData = [
    {
        role: "Frontend Developer Intern",
        company: "Softnix Infotech Pvt. Ltd",
        duration: "Sept 2025 - Ongoing",
        description: [
            "Developing user onboarding, search, and communication modules for a job platform using React.js and Node.js.",
            "Creating reusable UI components and integrating REST APIs for authentication and messaging.",
            "Using Firebase and cloud services to make the application scalable and efficient."
        ]
    }
];

const ExperienceSection = () => (
    <section id="experience" className="container section-padding">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="timeline-container">
            {/* <div className="timeline-line"></div> */}
            {experienceData.map((exp, index) => (
                <motion.div 
                    key={index} 
                    className="timeline-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* <div className="timeline-icon-container">
                        <Briefcase className="timeline-icon" size={16}/>
                    </div> */}
                    <div className="timeline-content">
                        <p className="timeline-date">{exp.duration}</p>
                        <h3 className="timeline-title">{exp.role}</h3>
                        <p className="timeline-subtitle">{exp.company}</p>
                        <ul className="timeline-description">
                            {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);
export default ExperienceSection;