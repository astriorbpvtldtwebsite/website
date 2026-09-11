import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHeroSection from '../components/contact/ContactHeroSection';
import ContactChannelsGrid from '../components/contact/ContactChannelsGrid';
import InquiryConsole from '../components/contact/InquiryConsole';
import OfficeLocationCard from '../components/contact/OfficeLocationCard';
import FAQ from '../components/FAQ';
import { useProjectModal } from '../contexts/ProjectModalContext';

const ContactPage = () => {
  const { openProjectModal } = useProjectModal();

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact AstriOrb | Direct Leadership & Institutional Gateway',
    description:
      'Connect directly with AstriOrb Pvt. Ltd. Reach our leadership team for Tastory seed funding, clinical trials for DocCo, hardware collaboration on Project ROW, or FISCLOK support.',
    url: 'https://astriorb.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'AstriOrb Pvt. Ltd.',
      url: 'https://astriorb.com',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Investor Relations',
          email: 'hashim@astriorb.com',
          availableLanguage: ['English', 'Malayalam', 'Hindi'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          email: 'support@astriorb.com',
          availableLanguage: ['English'],
        },
      ],
    },
  };

  return (
    <>
      <SEO
        title="Contact AstriOrb | Direct Leadership & Institutional Gateway"
        description="Connect directly with AstriOrb Pvt. Ltd. Reach our leadership team for Tastory seed funding, clinical trials for DocCo, hardware collaboration on Project ROW, or FISCLOK support."
        url="/contact"
        schema={contactSchema}
      />

      <Navbar />

      <main className="min-h-screen pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 dark:bg-obsidian bg-sand dark:text-white text-sand-charcoal overflow-hidden relative transition-colors duration-300">
        {/* Subtle Tech Grid Ambient Background */}
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

        {/* Ambient Top Glow Orbs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-citron-dim blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] bg-ocean/10 blur-[180px] pointer-events-none" />
        <div className="absolute top-2/3 -right-40 w-[450px] h-[450px] bg-emerald-500/10 blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1. Executive Communication Masthead */}
          <ContactHeroSection />

          {/* 2. Four Specialized Communication Desks */}
          <ContactChannelsGrid onOpenTastoryModal={openProjectModal} />

          {/* 3. Encrypted Inquiry Transmission Console */}
          <InquiryConsole />

          {/* 4. Geography & Founder Direct Channels */}
          <OfficeLocationCard />

          {/* 5. General FAQ */}
          <div className="mt-8">
            <FAQ />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default React.memo(ContactPage);
