import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projectsData = [
  {
    id: "01",
    title: "AXI to AHB Bridge Design and Verification",
    tags: ["SystemVerilog", "UVM", "AXI", "AHB"],
    description: "Designed and implemented an AXI-to-AHB bridge to translate AXI read and write transactions into AHB protocol transactions using synthesizable SystemVerilog RTL.",
    architecture: ["AXI Master", "AXI-to-AHB Bridge", "AHB Slave"],
    keyWork: [
      "Developed synthesizable RTL.",
      "Created a reusable UVM verification environment.",
      "Implemented scoreboard with functional coverage.",
      "Verified handshake signaling and response generation.",
      "Used directed test cases, assertions, and self-checking scoreboards.",
      "Designed protocol transaction translation.",
      "Implemented sequencer, driver, and monitor.",
      "Verified burst transfers and address decoding.",
      "Verified data integrity with constrained-random testing."
    ]
  },
  {
    id: "02",
    title: "APB Interfaced UART IP",
    tags: ["Verilog", "APB", "UART", "FIFO"],
    description: "Designed a Universal Asynchronous Receiver-Transmitter (UART) IP core with an APB interface for seamless integration into SoC environments.",
    architecture: ["APB Master", "APB Interface", "UART Tx/Rx", "Baud Rate Generator"],
    keyWork: [
      "Designed UART transmitter and receiver modules.",
      "Integrated asynchronous FIFOs for data buffering.",
      "Developed an APB slave interface for register configuration.",
      "Verified baud rate generation logic.",
      "Created a SystemVerilog testbench for functional verification."
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">PROJECTS</h2>
        <h3 className="section-heading">Featured Engineering Work</h3>
        <p className="section-description">
          Click a project to explore its architecture, verification methodology, and key learnings.
        </p>
      </div>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <motion.div 
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="project-header">
              <span className="project-number">{project.id}</span>
              <h4 className="project-title">{project.title}</h4>
            </div>

            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span className="project-tag" key={i}>{tag}</span>
              ))}
            </div>

            <p className="project-description">{project.description}</p>

            <div className="architecture-section">
              <h5 className="sub-heading">ARCHITECTURE FLOW</h5>
              <div className="architecture-flow">
                {project.architecture.map((block, i) => (
                  <React.Fragment key={i}>
                    <div className="arch-block">{block}</div>
                    {i < project.architecture.length - 1 && (
                      <span className="arch-arrow">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="key-work-section">
              <h5 className="sub-heading">KEY ENGINEERING WORK</h5>
              <div className="key-work-grid">
                {project.keyWork.map((work, i) => (
                  <div className="work-item" key={i}>
                    <span className="work-bullet">▹</span>
                    <p>{work}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;