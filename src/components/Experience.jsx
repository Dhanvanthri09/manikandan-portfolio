import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

// A simple inline SVG icon so we don't need to rely on lucide-react right now
const BuildingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <path d="M9 22v-4h6v4"></path>
    <path d="M8 6h.01"></path>
    <path d="M16 6h.01"></path>
    <path d="M12 6h.01"></path>
    <path d="M12 10h.01"></path>
    <path d="M12 14h.01"></path>
    <path d="M16 10h.01"></path>
    <path d="M16 14h.01"></path>
    <path d="M8 10h.01"></path>
    <path d="M8 14h.01"></path>
  </svg>
);

const experienceData = [
  {
    id: 1,
    role: "VLSI Design & Verification Trainee",
    company: "VLSI Guru Institute",
    location: "Bengaluru, India",
    date: "September 2023 - June 2024",
    tasks: [
      "Developed synthesizable RTL using Verilog.",
      "Verified digital designs using SystemVerilog and UVM.",
      "Worked with AXI, AHB, and APB protocols.",
      "Used SystemVerilog Assertions.",
      "Performed constrained-random verification.",
      "Worked with functional coverage.",
      "Performed RTL simulation and debugging.",
      "Worked with synthesis and timing analysis.",
      "Used tools including QuestaSim, VCS, Vivado, and Design Compiler."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2 className="section-title">EXPERIENCE</h2>
        <h3 className="section-heading">Professional Journey</h3>
      </div>

      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <motion.div 
            className="experience-card"
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="experience-header">
              <div className="role-company">
                <h4 className="role-title">{exp.role}</h4>
                <div className="company-info">
                  <BuildingIcon />
                  <span className="company-name">{exp.company}</span>
                </div>
              </div>
              <div className="date-location">
                <span className="date">{exp.date}</span>
                <span className="location">{exp.location}</span>
              </div>
            </div>

            <div className="tasks-grid">
              {exp.tasks.map((task, i) => (
                <div className="task-item" key={i}>
                  <span className="task-bullet">▹</span>
                  <p>{task}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;