// Projects Section
import { motion } from "framer-motion";
import { SectionTitle, fadeInItem, staggerContainer } from '../components/SectionTitle';
import { Github,ExternalLink } from "lucide-react";
const projectsData = [
  {
    title: 'Emotion Based Movie Recommendation',
    description: 'Recommends movies using AI-based real-time emotion detection.',
    image: 'movie.jpg',
    tags: ['React', 'Tailwind CSS', 'FastAPI', 'TMDB API'],
    githubUrl: 'https://github.com/riyadwivedi01/emotions-based-movie-recomendation-',
    liveUrl: '#',
  },
  {
    title: 'Weather App',
    description: 'Developed a responsive web app using HTML, CSS, and JavaScript with OpenWeather API to display real-time weather details.',
    image: 'weather.jpg',
    tags: ['HTML', 'CSS', 'JavaScript, API'],
    githubUrl: 'https://github.com/riyadwivedi01/weather-app',
    liveUrl: 'https://riyadwivedi01.github.io/weather-app/',
  },
  {
    title: 'Task Management App',
    description: 'A clean and intuitive task manager that boosts productivity.',
    image: 'task-manager.jpg',
    tags: ['TypeScript', 'JavaSript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/riyadwivedi01/task-manager--app',
    liveUrl: 'https://task-mananger-app.netlify.app/',
  },
  
];

const ProjectsSection = () => (
  <section id="projects" className="container section-padding">
    <SectionTitle>Projects</SectionTitle>
    <motion.div 
        className="projects-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
    >
      {projectsData.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          variants={fadeInItem}
        >
          <div className="project-image-container">
             <img src={project.image} alt={project.title} className="project-image" />
          </div>
          <div className="project-overlay"></div>
          <div className="project-content">
             <div className="project-header">
               <h3 className="project-title">{project.title}</h3>
               <div className="project-links">
                    <motion.a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link-icon"
                        whileHover={{ scale: 1.2, rotate: -10 }}
                        aria-label={`${project.title} Live Demo`}
                    >
                        <ExternalLink size={28} />
                    </motion.a>
                <motion.a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-github-link"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    aria-label={`${project.title} on Github`}
                >
                    <Github size={28} />
                </motion.a>
             </div>
             </div><p className="project-description">{project.description}</p>
             <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);
export default ProjectsSection;
