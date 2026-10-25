import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ResearchEducation from './components/ResearchEducation';
import Contact from './components/Contact'; // Add this import

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ResearchEducation />
        <Contact /> {/* Add this tag */}
      </main>
    </div>
  );
}

export default App;