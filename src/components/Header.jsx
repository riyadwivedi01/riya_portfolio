import { useState } from "react";
import { motion } from "framer-motion";

const Header = ({ activeSection }) => {   // yaha props receive karo
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications'];

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-content-wrapper">
          <motion.a 
            href="#home"
            className="nav-logo"
            whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(196,181,253)" }}
          >
            Riya Dwivedi
          </motion.a>

          {/* Hamburger toggle */}
          <div 
            className="nav-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          <ul className={`nav-ul ${menuOpen ? "open" : ""}`}>
            {navItems.map(item => {
              const id = item.toLowerCase();
              return (
                <li key={item}>
                  <a 
                    href={`#${id}`} 
                    className={`nav-link ${activeSection === id ? "active" : ""}`}
                  >
                    {item}
                    <span className="nav-link-underline"></span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
