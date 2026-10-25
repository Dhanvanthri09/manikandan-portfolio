import React from 'react';
import { motion } from 'framer-motion';
import './ResearchEducation.css';

// Safe inline SVG icons
const BookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const CapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
);

const ResearchEducation = () => {
  return (
    <div className="academic-wrapper">
      {/* Research Section */}
      <section id="research" className="academic-section">
        <div className="section-header">
          <h2 className="section-title">RESEARCH & PUBLICATIONS</h2>
          <h3 className="section-heading">Published Research</h3>
        </div>

        <motion.div 
          className="academic-card research-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-icon-container">
            <BookIcon />
          </div>
          <div className="card-content">
            <h4 className="card-title">Children's Speech Emotion Recognition Using Feature Fusion-Based Deep Neural Networks</h4>
            <p className="card-subtitle">International Journal of Speech Technology</p>
            <div className="tag-container">
              <span className="status-tag">
                <span className="dot"></span> Published
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="academic-section">
        <div className="section-header">
          <h2 className="section-title">EDUCATION</h2>
          <h3 className="section-heading">Academic Foundation</h3>
        </div>

        <motion.div 
          className="academic-card education-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="card-icon-container">
            <CapIcon />
          </div>
          <div className="card-content">
            <h4 className="card-title">Bachelor of Engineering — Electronics and Communication Engineering</h4>
            <p className="card-subtitle">Anna University Regional Campus, Coimbatore</p>
            <div className="education-details">
              <span>Coimbatore, Tamil Nadu, India</span>
              <span className="divider">•</span>
              <span>2022 - 2026</span>
              <span className="divider">•</span>
              <span className="highlight-text">CGPA: 8.3 / 10</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ResearchEducation;