import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: "HDL & Verification",
    skills: ["Verilog HDL", "SystemVerilog", "UVM", "SystemVerilog Assertions", "Functional Verification", "Code Coverage"]
  },
  {
    title: "Digital & RTL Design",
    skills: ["RTL Design", "Digital Design Logic", "FSM Design", "RTL Simulation", "Static Timing Analysis"]
  },
  {
    title: "ASIC / FPGA",
    skills: ["ASIC Front-End Design Flow", "FPGA", "Synthesis", "Design Flow"]
  },
  {
    title: "Programming & Scripting",
    skills: ["C", "C++", "Perl", "Linux Commands"]
  },
  {
    title: "EDA Tools",
    skills: ["Design Compiler (DC Shell)", "SpyGlass / VC Lint", "Questa", "Xilinx ISE / Vivado", "VCS"]
  }
];

const protocols = [
  { name: "AXI", desc: "Advanced eXtensible Interface — high-performance burst transactions" },
  { name: "AHB", desc: "Advanced High-performance Bus — pipelined system bus" },
  { name: "APB", desc: "Advanced Peripheral Bus — low-power peripheral bus" },
  { name: "UART", desc: "Universal Asynchronous Rx/Tx — serial communication" },
  { name: "SPI", desc: "Serial Peripheral Interface — full-duplex sync link" },
  { name: "I2C", desc: "Inter-Integrated Circuit — two-wire serial bus" }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">TECHNICAL SKILLS</h2>
        <h3 className="section-heading">Tools & Technologies</h3>
        <p className="section-description">
          Proficient in industry-standard tools, protocols, and technologies used in VLSI design and verification.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div 
            className="skill-card" 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h4 className="skill-category-title">{category.title}</h4>
            <ul className="skill-list">
              {category.skills.map((skill, sIndex) => (
                <li key={sIndex}>
                  <span className="bullet">▹</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="protocols-section">
        <h3 className="protocols-heading">Protocol Expertise</h3>
        <div className="protocols-grid">
          {protocols.map((protocol, index) => (
            <motion.div 
              className="protocol-card" 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h4 className="protocol-name">{protocol.name}</h4>
              <p className="protocol-desc">{protocol.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;