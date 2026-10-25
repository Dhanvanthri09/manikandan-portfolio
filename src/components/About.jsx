import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">ABOUT ME</h2>
      </div>

      <div className="about-content">
        {/* Left Column: Tech Diagram */}
        <motion.div 
          className="about-diagram"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="chip-diagram">
            <div className="chip-core">ASIC</div>
            {/* CSS will draw the chip pins */}
            <div className="chip-pins vertical top"></div>
            <div className="chip-pins vertical bottom"></div>
            <div className="chip-pins horizontal left"></div>
            <div className="chip-pins horizontal right"></div>
          </div>
          <div className="diagram-labels">
            <span>LOGIC</span>
            <span>•</span>
            <span>VERIFICATION</span>
            <span>•</span>
            <span>SILICON</span>
          </div>
        </motion.div>

        {/* Right Column: Bio and Cards */}
        <motion.div 
          className="about-text-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="about-subtitle">
            Turning Logic into <span className="highlight">Reliable Silicon</span>
          </h3>
          
          <p className="about-description">
            I am a Design Verification Engineer with a strong foundation in digital design, RTL development, and functional verification. I work across Verilog, SystemVerilog, and UVM to build reusable verification environments, and I'm comfortable with ASIC front-end design flows spanning RTL simulation through synthesis and timing analysis.
          </p>
          
          <p className="about-description">
            I'm passionate about building reliable and efficient chip designs through systematic verification and modern verification methodologies — from constrained-random testing to functional coverage closure.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <h4>3+</h4>
              <p>Major Technical Projects</p>
            </div>
            <div className="stat-card">
              <h4>Multiple</h4>
              <p>AMBA Protocols</p>
            </div>
            <div className="stat-card">
              <h4>RTL + Verification</h4>
              <p>Core Expertise</p>
            </div>
            <div className="stat-card">
              <h4>VLSI</h4>
              <p>Design & Verification Training</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;