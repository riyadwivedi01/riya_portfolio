// Hero Section
import ThreeDBackground from '../components/ThreeDBackground';
import TypingAnimation from '../components/TypingAnimation';

import { motion } from 'framer-motion';
const HeroSection = () => {
    const roles = ["Software Developer", "Frontend Developer", "Web Developer"];
    return (
        <section id="home" className="hero-section">
            <ThreeDBackground />
            <div className="hero-bg-gradient"></div>
            
            <div className="hero-content">
                <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1 
                        className="hero-main-title"
                        whileHover={{ scale: 1.02, textShadow: "0px 0px 10px rgba(196, 181, 253, 0.5)" }}
                        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    >
                        Hi There, <br /> I'm <span className="hero-name">Riya Dwivedi</span>
                    </motion.h1>
                    <TypingAnimation roles={roles} />
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hero-buttons"
                >
                    <a href="#projects" className="hero-button">
                        See My Work
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
 export default HeroSection;
