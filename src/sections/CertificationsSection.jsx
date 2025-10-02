// Certifications Section
import { motion } from "framer-motion";
import { SectionTitle, fadeInItem, staggerContainer } from "../components/SectionTitle";
import { Award,ExternalLink } from "lucide-react";
const certificationsData = [
  { name: 'CSS3', issuer: 'Infosys Springboard', url: 'https://drive.google.com/file/d/167jqumVIUSLHd-n_rx8SNizpkRVe3vSe/view?usp=sharing' },
  { name: 'JavaScript', issuer: 'Infosys Springboard', url: 'https://drive.google.com/file/d/1UfrIO5eCiYmSOJVgAslrBvMqxLGV0GEX/view?usp=sharing' },
  { name: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Training and Certification', url: 'https://drive.google.com/file/d/1KO4wY_a9zH6ojswGG10Q94VzfgMeYAfO/view?usp=sharing' },
  { name: 'Work with Components in Figma', issuer: 'Coursera', url: 'https://drive.google.com/file/d/1eY-tTXQzlAIVURsDiEfYNHAFsYGdRJcK/view?usp=sharing' },
  { name: "Sparkathon Converge - Certificate of Appreciation",issuer: "Walmart Global Tech", url: 'https://drive.google.com/file/d/1LFATtrubAfaxxoCx0RbmX6JZVVcuc6X4/view?usp=sharing' }
];

const CertificationsSection = () => (
  <section id="certifications" className="container section-padding">
    <SectionTitle>Certifications</SectionTitle>
    <motion.div 
        className="certifications-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
    >
      {certificationsData.map((cert) => (
        <motion.a 
          key={cert.name}
          href={cert.url}
          target="_blank"
            rel="noopener noreferrer"
          className="certification-card"
          variants={fadeInItem}
        >
          <div className="certification-icon">
            <Award size={32} />
          </div>
          <div className="certification-details">
            <h3>{cert.name}</h3>
            <p>{cert.issuer}</p>
          </div>
          <div className="certification-view-icon">
                <ExternalLink size={20} />
            </div>
        </motion.a>
      ))}
    </motion.div>
  </section>
);
export default CertificationsSection;