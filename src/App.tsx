import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import ShowcaseSection from './components/ShowcaseSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModePopup from './components/DarkModePopup';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-500 relative">
        <ParticleBackground />
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <ShowcaseSection />
          <Contact />
          <Footer />
          <DarkModePopup />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;