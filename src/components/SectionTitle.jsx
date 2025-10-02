// Section Title Component
import { motion } from 'framer-motion';
const SectionTitle = ({ children }) => (
    <motion.h2 
        className="section-title"
        style={{ perspective: 800 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        whileHover={{
            rotateX: 15,
            textShadow: "0px 10px 15px rgba(196, 181, 253, 0.3)",
            transition: { type: 'spring', stiffness: 300, damping: 15 }
        }}
    >
        {children}
    </motion.h2>
);

// Staggered Container for animations
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const fadeInItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
export { SectionTitle, staggerContainer, fadeInItem };