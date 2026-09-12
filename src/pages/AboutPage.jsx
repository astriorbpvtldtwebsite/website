import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHeroSection from '../components/about/AboutHeroSection';
import FoundingThesis from '../components/about/FoundingThesis';
import AboutInteractiveTerminal from '../components/about/AboutInteractiveTerminal';
import LeadershipProfile from '../components/about/LeadershipProfile';
import CompanyDivisions from '../components/about/CompanyDivisions';
import CompanyMilestones from '../components/about/CompanyMilestones';
import CorporateDueDiligence from '../components/about/CorporateDueDiligence';
import { useProjectModal } from '../contexts/ProjectModalContext';

const AboutPage = () => {
  const { openProjectModal } = useProjectModal();

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About AstriOrb Pvt. Ltd. | Multi-Product Venture Studio',
    description:
      'Learn about AstriOrb Pvt. Ltd. — an autonomous multi-product engineering and smart hardware venture studio founded in Kerala, India by Mohammed Hashim. Explore our founding thesis, leadership pedigree, and 4 specialized technical divisions.',
    url: 'https://astriorb.com/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'AstriOrb Pvt. Ltd.',
      url: 'https://astriorb.com',
      founder: {
        '@type': 'Person',
        name: 'Mohammed Hashim',
        jobTitle: 'Founder & Lead Architect',
        url: 'https://hashim.astriorb.com',
        sameAs: [
          'https://hashim.astriorb.com',
          'https://www.linkedin.com/in/mohammed-hashim-b9632b325/',
        ],
      },
    },
  };

  return (
    <>
      <SEO
        title="About AstriOrb Pvt. Ltd. | Multi-Product Venture Studio"
        description="Learn about AstriOrb Pvt. Ltd. — an autonomous multi-product engineering and smart hardware venture studio founded in Kerala, India by Mohammed Hashim. Explore our founding thesis, leadership pedigree, and 4 specialized technical divisions."
        url="/about"
        schema={aboutSchema}
      />

      <Navbar />

      <main className="min-h-screen pt-24 sm:pt-28 md:pt-36 pb-20 dark:bg-obsidian bg-sand dark:text-white text-sand-charcoal overflow-hidden relative transition-colors duration-300">
        {/* Subtle Tech Grid Ambient Background */}
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

        {/* Ambient Radial Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-citron-dim blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] bg-ocean/10 blur-[180px] pointer-events-none" />
        <div className="absolute top-2/3 -right-40 w-[450px] h-[450px] bg-emerald-500/10 blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1. Executive Origin & Animated Stats Counter */}
          <AboutHeroSection />

          {/* 2. The Founding Thesis: Agency Trap vs Studio Model */}
          <FoundingThesis />

          {/* 3. Interactive AstriOrb Core CLI Console */}
          <AboutInteractiveTerminal />

          {/* 4. Leadership & Engineering Pedigree */}
          <LeadershipProfile />

          {/* 5. Four Specialized Operating Divisions */}
          <CompanyDivisions />

          {/* 6. Company Evolution & Milestones Roadmap */}
          <CompanyMilestones />

          {/* 7. Corporate Transparency & Due Diligence Gateway */}
          <CorporateDueDiligence onOpenTastoryModal={openProjectModal} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default React.memo(AboutPage);
