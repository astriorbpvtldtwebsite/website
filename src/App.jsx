import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Careers from './components/Careers';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FisclokShowcase from './components/FisclokShowcase';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import SectionWrapper from './components/SectionWrapper';
import Preloader from './components/Preloader';
import SkipToContent from './components/SkipToContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProjectModalProvider } from './contexts/ProjectModalContext';
import { PRELOADER_DURATION } from './utils/constants';

// Lazy load non-critical pages for code splitting
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const LicenseAgreement = lazy(() => import('./pages/LicenseAgreement'));
const GDPRCompliance = lazy(() => import('./pages/GDPRCompliance'));

// FISCLOK Legal Pages
const FisclokPrivacyPolicy = lazy(() => import('./pages/FisclokPrivacyPolicy'));
const FisclokTerms = lazy(() => import('./pages/FisclokTerms'));

// Blog Pages
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader = () => (
  <div className="min-h-screen bg-light-bg dark:bg-space-900 flex items-center justify-center text-light-text dark:text-white">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-cosmic-purple/20 border-t-cosmic-purple rounded-full animate-spin"></div>
      <p className="text-sm text-light-subtext dark:text-gray-400 animate-pulse font-medium tracking-wide">Loading...</p>
    </div>
  </div>
);

const HomePage = ({ loading }) => {
  return (
    <>
      <SEO />
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
              <SectionWrapper id="fisclok" className="py-16 md:py-24 bg-light-card dark:bg-gradient-to-b dark:from-space-800 dark:to-space-900 relative overflow-hidden">
                <FisclokShowcase />
              </SectionWrapper>
              <SectionWrapper id="why-us" className="py-16 md:py-24 bg-light-bg dark:bg-gradient-to-b dark:from-space-900 dark:to-space-800 relative overflow-hidden">
                <WhyChooseUs />
              </SectionWrapper>

              <SectionWrapper id="careers" className="py-16 md:py-24 bg-light-card dark:bg-space-800 relative overflow-hidden">
                <Careers />
              </SectionWrapper>
              <SectionWrapper id="contact" className="py-16 md:py-24 bg-light-bg dark:bg-gradient-to-b dark:from-space-900 dark:to-space-800 relative overflow-hidden">
                <Contact />
              </SectionWrapper>
              <SectionWrapper id="faq" className="py-16 md:py-24 bg-light-card dark:bg-gradient-to-b dark:from-space-800 dark:to-space-900 relative overflow-hidden">
                <FAQ />
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
      <HelmetProvider>
        <ThemeProvider>
          <ProjectModalProvider>
            <SkipToContent />
            <div className="min-h-screen bg-light-bg text-light-text dark:bg-gradient-cosmic dark:text-white font-inter antialiased" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
              <CustomCursor />
              <ScrollProgress />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage loading={loading} />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsOfService />} />
                  <Route path="/license" element={<LicenseAgreement />} />
                  <Route path="/gdpr" element={<GDPRCompliance />} />
                  {/* FISCLOK Routes */}
                  <Route path="/fisclok/privacy-policy" element={<FisclokPrivacyPolicy />} />
                  <Route path="/fisclok/terms" element={<FisclokTerms />} />
                  {/* Blog Routes */}
                  <Route path="/blog" element={<BlogList />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  {/* Catch-all 404 Route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </ProjectModalProvider>
        </ThemeProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
