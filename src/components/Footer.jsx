import React from "react";
import { motion } from "framer-motion";
import "./Footer.css"; // External styles

export default function Footer() {
  return (
    <motion.footer 
      className="footer-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content">
        
        {/* Left Section: Project Structure */}
        <div className="footer-section">
          <h3 className="footer-title">📂 Project Structure</h3>
          <pre className="code-block">
            restaurant-finder/<br />
            ├── <span className="folder">public/</span>  <span className="desc">Static files</span><br />
            ├── <span className="folder">src/</span>  <span className="desc">Main React code</span><br />
            │   ├── <span className="folder">components/</span>  <span className="desc">Reusable parts</span><br />
            │   ├── <span className="file">App.js</span>  <span className="desc">Main App</span><br />
            │   ├── <span className="file">index.js</span>  <span className="desc">Entry point</span><br />
            ├── <span className="file">package.json</span>  <span className="desc">Dependencies</span><br />
            ├── <span className="file">README.md</span>  <span className="desc">Documentation</span><br />
          </pre>
        </div>

        {/* Right Section: About & Links */}
        <div className="footer-section">
          <h3 className="footer-title">🔗 More Info</h3>
          <p>
            Built by <span className="highlight">gaswiz</span>. Check out:
          </p>
          <ul className="footer-links">
            <li><a href="https://github.com/gaswiz" target="_blank" rel="noopener noreferrer">💻 GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/kp-18b477267/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a></li>
        
          </ul>
        </div>

      </div>
    </motion.footer>
  );
}
