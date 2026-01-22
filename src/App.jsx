import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import SkipToContent from './components/SkipToContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProjectModalProvider } from './contexts/ProjectModalContext';
import { PRELOADER_DURATION } from './utils/constants';

// Legal Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import LicenseAgreement from './pages/LicenseAgreement';
import GDPRCompliance from './pages/GDPRCompliance';

// FISCLOK Legal Pages
import FisclokPrivacyPolicy from './pages/FisclokPrivacyPolicy';
import FisclokTerms from './pages/FisclokTerms';

const HomePage = ({ loading }) => {
  return (
    <>
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
            <main id="main-content">
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
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      document.body.classList.add('no-cursor');
    }

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, PRELOADER_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <ProjectModalProvider>
          <SkipToContent />
          <div className="min-h-screen bg-light-bg text-light-text dark:bg-gradient-cosmic dark:text-white font-inter antialiased" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
            <CustomCursor />
            <Routes>
              <Route path="/" element={<HomePage loading={loading} />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/license" element={<LicenseAgreement />} />
              <Route path="/gdpr" element={<GDPRCompliance />} />
              {/* FISCLOK Routes */}
              <Route path="/fisclok/privacy-policy" element={<FisclokPrivacyPolicy />} />
              <Route path="/fisclok/terms" element={<FisclokTerms />} />
            </Routes>
          </div>
        </ProjectModalProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
