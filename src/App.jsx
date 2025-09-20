import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';

import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SectionWrapper from './components/SectionWrapper';
import Preloader from './components/Preloader';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProjectModalProvider } from './contexts/ProjectModalContext';

function App() {
  console.log('App component rendered');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      document.body.classList.add('no-cursor');
    }

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2500); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <ProjectModalProvider>
        <div className="min-h-screen bg-light-bg text-light-text dark:bg-gradient-cosmic dark:text-white font-inter antialiased">
        <CustomCursor />
        <AnimatePresence>
          {loading ? (
            <motion.div key="preloader" exit={{ opacity: 0 }}>
              <Preloader />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Navbar />
              <Hero />
              <SectionWrapper id="about" className="py-16 md:py-24 bg-light-card dark:bg-gradient-to-b dark:from-space-900 dark:to-space-800">
                <About />
              </SectionWrapper>
              <SectionWrapper id="services" className="py-16 md:py-24 bg-light-bg dark:bg-space-800 relative overflow-hidden">
                <Services />
              </SectionWrapper>
              <SectionWrapper id="why-us" className="py-16 md:py-24 bg-light-card dark:bg-gradient-to-b dark:from-space-800 dark:to-space-900 relative overflow-hidden">
                <WhyChooseUs />
              </SectionWrapper>

              <SectionWrapper id="careers" className="py-16 md:py-24 bg-light-card dark:bg-space-800 relative overflow-hidden">
                <Projects />
              </SectionWrapper>
              <SectionWrapper id="contact" className="py-16 md:py-24 bg-light-bg dark:bg-gradient-to-b dark:from-space-900 dark:to-space-800 relative overflow-hidden">
                <Contact />
              </SectionWrapper>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </ProjectModalProvider>
    </ThemeProvider>
  );
}

export default App;
