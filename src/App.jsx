import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeProductsPreview from './components/HomeProductsPreview';
import Services from './components/Services';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import SectionWrapper from './components/SectionWrapper';
import Preloader from './components/Preloader';
import SkipToContent from './components/SkipToContent';
import SpotlightCard from './components/SpotlightCard';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProjectModalProvider } from './contexts/ProjectModalContext';
import { PRELOADER_DURATION } from './utils/constants';
import { ArrowRight, Building2, Briefcase, Mail } from 'lucide-react';

// Dedicated Main Pages
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Lazy load legal and documentation pages
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const LicenseAgreement = lazy(() => import('./pages/LicenseAgreement'));
const GDPRCompliance = lazy(() => import('./pages/GDPRCompliance'));

// FISCLOK Legal Pages - Protected Routes
const FisclokPrivacyPolicy = lazy(() => import('./pages/FisclokPrivacyPolicy'));
const FisclokTerms = lazy(() => import('./pages/FisclokTerms'));

// Blog Pages
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader = () => (
  <div className="min-h-screen dark:bg-obsidian bg-sand flex items-center justify-center dark:text-white text-sand-charcoal">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-10 h-10 border-2 border-citron/20 border-t-citron rounded-full animate-spin" />
      <p className="text-xs dark:text-titanium-400 text-sand-charcoal/70 font-mono tracking-widest uppercase animate-pulse">
        Loading AstriOrb...
      </p>
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
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <main id="main-content">
              {/* 1. Hero: 3D Core, Headline & Key CTAs */}
              <Hero />

              {/* 2. Essential Products Overview & Value Propositions */}
              <HomeProductsPreview />

              {/* 3. Core Engineering Capabilities */}
              <SectionWrapper id="capabilities" className="py-20 md:py-28 dark:bg-titanium-900/40 bg-sand-border/25 relative overflow-hidden transition-colors duration-300">
                <Services />
              </SectionWrapper>

              {/* 4. High-Impact Hub Navigation Banner */}
              <section className="py-20 dark:bg-obsidian bg-sand relative overflow-hidden border-t dark:border-white/10 border-sand-border transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-mono uppercase tracking-wider text-citron font-semibold">
                      EXPLORE DEEPER
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-sand-charcoal mt-2 tracking-tight">
                      Discover More About AstriOrb
                    </h2>
                    <p className="text-sm dark:text-titanium-300 text-sand-charcoal/80 mt-2">
                      Learn about our founding story, explore career opportunities, or reach out for investment and partnerships.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* About Card */}
                    <Link to="/about" className="group">
                      <SpotlightCard className="p-7 h-full flex flex-col justify-between" withCorners>
                        <div>
                          <div className="w-12 h-12 rounded-xl dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border text-citron flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                            <Building2 size={24} />
                          </div>
                          <h3 className="text-xl font-bold dark:text-white text-sand-charcoal mb-2 font-mono group-hover:text-citron transition-colors">
                            The AstriOrb Vision
                          </h3>
                          <p className="text-xs dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal mb-4">
                            Learn about our founder-led model, why we reject agency outsourcing, and our mission to build a multi-product house from Kerala.
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-citron font-semibold">
                          <span>EXPLORE ABOUT</span>
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </SpotlightCard>
                    </Link>

                    {/* Careers Card */}
                    <Link to="/careers" className="group">
                      <SpotlightCard className="p-7 h-full flex flex-col justify-between" withCorners>
                        <div>
                          <div className="w-12 h-12 rounded-xl dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border text-citron flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                            <Briefcase size={24} />
                          </div>
                          <h3 className="text-xl font-bold dark:text-white text-sand-charcoal mb-2 font-mono group-hover:text-citron transition-colors">
                            Careers & Squad
                          </h3>
                          <p className="text-xs dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal mb-4">
                            Join an elite, agile crew building real software and smart IoT hardware products with high autonomy and asynchronous trust.
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-citron font-semibold">
                          <span>VIEW OPENINGS</span>
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </SpotlightCard>
                    </Link>

                    {/* Contact Card */}
                    <Link to="/contact" className="group">
                      <SpotlightCard className="p-7 h-full flex flex-col justify-between" withCorners>
                        <div>
                          <div className="w-12 h-12 rounded-xl dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border text-citron flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                            <Mail size={24} />
                          </div>
                          <h3 className="text-xl font-bold dark:text-white text-sand-charcoal mb-2 font-mono group-hover:text-citron transition-colors">
                            Contact & Investment
                          </h3>
                          <p className="text-xs dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal mb-4">
                            Connect regarding seed/angel investment for Tastory, clinical research for DocCo, or general enterprise inquiries.
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-citron font-semibold">
                          <span>GET IN TOUCH</span>
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </SpotlightCard>
                    </Link>
                  </div>
                </div>
              </section>
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

    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh, { passive: true });
    window.addEventListener('orientationchange', setVh, { passive: true });

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, PRELOADER_DURATION);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
      document.body.classList.remove('no-cursor');
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <HelmetProvider>
        <ThemeProvider>
          <ProjectModalProvider>
            <SkipToContent />
            <div
              className="min-h-screen dark:bg-obsidian bg-sand dark:text-white text-sand-charcoal font-inter antialiased transition-colors duration-300"
              style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
            >
              <CustomCursor />
              <ScrollProgress />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage loading={loading} />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsOfService />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/license" element={<LicenseAgreement />} />
                  <Route path="/gdpr" element={<GDPRCompliance />} />
                  {/* FISCLOK Routes - Protected Paths */}
                  <Route path="/fisclok/privacy-policy" element={<FisclokPrivacyPolicy />} />
                  <Route path="/fisclok/privacy-policy/" element={<FisclokPrivacyPolicy />} />
                  <Route path="/fisclok/terms" element={<FisclokTerms />} />
                  <Route path="/fisclok/terms/" element={<FisclokTerms />} />
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
