import { motion } from "framer-motion";
import { SectionTitle } from "../components/SectionTitle";
import { GraduationCap } from "lucide-react";
// Education Section
const educationData = [
    {
        degree: "Bachelor of Technology, CSE",
        institution: "Pranveer Singh Institute of Technology, Kanpur",
        duration: "2022 - Present",
        // score: "CGPA: 8.5/10"
        score: "Percentage: 66%"
    },
    {
        degree: "Class XII (Senior Secondary)",
        institution: "K.K.D.M Public School, Rasulabad",
        duration: "2022",
        score: "Percentage: 70%"
    },
     {
        degree: "Class X (Secondary)",
        institution: "K.K.D.M Public School, Rasulabad",
        duration: "2020",
        score: "Percentage: 82.5%"
    }
];

const EducationSection = () => (
    <section id="education" className="container section-padding">
        <SectionTitle>Education</SectionTitle>
         <div className="timeline-container">
            <div className="timeline-line"></div>
            {educationData.map((edu, index) => (
                <motion.div 
                    key={index} 
                    className="timeline-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="timeline-icon-container">
                        <GraduationCap className="timeline-icon" size={16}/>
                    </div>
                    <div className="timeline-content">
                        <p className="timeline-date">{edu.duration}</p>
                        <h3 className="timeline-title">{edu.degree}</h3>
                        <p className="timeline-subtitle">{edu.institution}</p>
                        <p className="timeline-score">{edu.score}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);
export default EducationSection;