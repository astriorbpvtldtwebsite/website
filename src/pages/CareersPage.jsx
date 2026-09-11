import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Send, ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CareersHeroSection from '../components/careers/CareersHeroSection';
import CulturePillars from '../components/careers/CulturePillars';
import OpenRolesList from '../components/careers/OpenRolesList';
import HiringProcess from '../components/careers/HiringProcess';
import CareersFAQ from '../components/careers/CareersFAQ';
import JobApplicationModal from '../components/careers/JobApplicationModal';
import SpotlightCard from '../components/SpotlightCard';
import { jobRoles } from '../data/careersData';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenApplyModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleOpenSpontaneousModal = () => {
    setSelectedJob({ title: 'Spontaneous Engineering Pitch', department: 'General R&D' });
    setIsModalOpen(true);
  };

  const jobPostingsSchema = jobRoles.map((role) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: role.title,
    description: `${role.description} Key focus: ${role.highlights.join('; ')}`,
    datePosted: '2026-01-01',
    validThrough: '2026-12-31',
    employmentType: role.type.includes('Full-time') ? 'FULL_TIME' : 'CONTRACTOR',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'AstriOrb Pvt. Ltd.',
      sameAs: 'https://astriorb.com',
      logo: 'https://astriorb.com/logo.png',
    },
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'India',
    },
  }));

  return (
    <>
      <SEO
        title="Careers & Squad Initiation | AstriOrb Venture Studio"
        description="Explore engineering, embedded hardware R&D, clinical healthtech research, and growth roles at AstriOrb Pvt. Ltd. in Kerala, India. Build real proprietary software and smart hardware."
        url="/careers"
        schema={jobPostingsSchema}
      />

      <Navbar />

      <main className="min-h-screen pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 dark:bg-obsidian bg-sand dark:text-white text-sand-charcoal overflow-hidden relative transition-colors duration-300">
        {/* Subtle Tech Grid Background */}
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

        {/* Ambient Top Glow Orbs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-citron-dim blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] bg-ocean/10 blur-[180px] pointer-events-none" />
        <div className="absolute top-2/3 -right-40 w-[450px] h-[450px] bg-emerald-500/10 blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1. Executive Talent Hero & Metrics */}
          <CareersHeroSection />

          {/* 2. Work Standards & Culture Pillars */}
          <CulturePillars />

          {/* 3. Open Roles Deck & Department Filter */}
          <OpenRolesList onSelectRole={handleOpenApplyModal} />

          {/* 4. How We Hire: 3-Step Transparent Pipeline */}
          <HiringProcess />

          {/* 5. Candidate FAQ */}
          <CareersFAQ />

          {/* 6. Spontaneous Application / Direct Founder Pitch */}
          <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
            <SpotlightCard className="p-5 sm:p-12 text-center relative overflow-hidden rounded-xl sm:rounded-2xl" withCorners>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl dark:bg-titanium-800 bg-sand-border/70 border border-citron text-citron flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-citron font-bold block mb-1">
                SPONTANEOUS INITIATIVE
              </span>

              <h3 className="text-xl sm:text-3xl font-bold dark:text-white text-sand-charcoal mb-2 sm:mb-3 font-mono">
                Don't See Your Exact Role?
              </h3>

              <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed font-normal">
                If you have delivered impressive personal software projects, open-source repositories, or embedded hardware circuits, pitch yourself directly to our founder.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={handleOpenSpontaneousModal}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs font-mono font-bold bg-citron text-obsidian shadow-lg shadow-citron/25 hover:bg-citron-light transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>PITCH YOUR PORTFOLIO DIRECTLY</span>
                  <ArrowRight size={14} />
                </button>

                <a
                  href="mailto:hashim@astriorb.com?subject=Spontaneous%20Application%20-%20AstriOrb"
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs font-mono font-semibold dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal hover:border-citron hover:text-citron transition-colors text-center flex items-center justify-center"
                >
                  EMAIL FOUNDER
                </a>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* Quick-Apply Modal */}
        <JobApplicationModal
          job={selectedJob}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </main>

      <Footer />
    </>
  );
};

export default React.memo(CareersPage);
