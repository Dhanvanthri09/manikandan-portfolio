import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

// Safe inline SVG icons
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="section-header center-header">
          <h2 className="section-title">CONTACT</h2>
          <h3 className="section-heading">Let's Build Reliable Silicon</h3>
          <p className="contact-description">
            Open to opportunities in VLSI Design, RTL Development, and Functional Verification.
          </p>
        </div>

        <div className="contact-content">
          {/* Left Side: Contact Info */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
 <div className="info-card">
              <div className="info-item">
                <div className="icon-box"><MailIcon /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:dhanushmani379@gmail.com">dhanushmani379@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><LinkedinIcon /></div>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="http://www.linkedin.com/in/manikandan-s-304198249" target="_blank" rel="noreferrer">linkedin.com/in/manikandan-s-304198249</a>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><GithubIcon /></div>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/MANIKANDANS-24" target="_blank" rel="noreferrer">github.com/MANIKANDANS-24</a>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><MapPinIcon /></div>
                <div>
                  <h4>Location</h4>
                  <p>Bengalore, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           <form className="contact-form" action="https://formsubmit.co/dhanushmani379@gmail.com" method="POST">
              {/* Optional: This hidden input disables the captcha so it sends immediately */}
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="form-row">
                <div className="input-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="input-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="input-group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="input-group">
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-icon">M</span> MANIKANDAN
          </div>
          <p className="footer-role">VLSI Design Verification Engineer</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Manikandan S. Built with React.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;