import React from 'react';
import { motion } from 'framer-motion';

import './Hero.css'; // We'll create this next
// Safe inline SVG icons
const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="greeting">HELLO, I'M</p>
          <h1 className="name">MANIKANDAN S</h1>
          <h2 className="title">VLSI Design Verification Engineer</h2>
          
          <div className="tags">
            <span className="tag">SystemVerilog</span>
            <span className="tag">UVM Verification</span>
            <span className="tag">RTL Design</span>
          </div>

          <p className="description">
            Design Verification Engineer with a strong foundation in digital design, 
            RTL development, and functional verification. I build reusable verification 
            environments to ensure reliable silicon.
          </p>

          <div className="action-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>

          <div className="social-links">
            <a href="mailto:dhanushmani379@gmail.com" title="Email"><MailIcon /></a>
            <a href="http://www.linkedin.com/in/manikandan-s-304198249" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedinIcon /></a>
            <a href="https://github.com/MANIKANDANS-24" target="_blank" rel="noreferrer" title="GitHub"><GithubIcon /></a>
            
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="hero-image-container"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="image-wrapper">
          {/* Placeholder for Manikandan's image */}
          <img src="/profile.jpeg" alt="Manikandan S" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', borderRadius: '8px' }} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;