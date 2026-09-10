import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import CompanyCodeCard from './CompanyCodeCard';
import { useProjectModal } from '../contexts/ProjectModalContext';

const Hero = () => {
  const { openProjectModal } = useProjectModal();

  const metrics = [
    { label: 'Proprietary Products', value: '5 Products', sub: 'Finance, Food, Health, SaaS & IoT' },
    { label: 'Engineering Execution', value: '100% In-House', sub: 'Conceived & Built in Kerala' },
    { label: 'Solo Founder Execution', value: '3,000+ Hours', sub: '7 Days/Wk Coding, Research & Networking Since Sept 2025' },
    { label: 'Operating Model', value: 'Multi-Product', sub: 'Zero Client Outsourcing Agency' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-36 pb-8 sm:pb-12 overflow-hidden dark:bg-obsidian bg-sand dark:text-white text-sand-charcoal transition-colors duration-300"
    >
      {/* Background Ambient Engineering Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Tactical Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 mb-4 sm:mb-6 shadow-sm max-w-full"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-citron animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-xs font-mono font-medium text-citron uppercase tracking-normal sm:tracking-wider whitespace-nowrap truncate">
                <span className="hidden sm:inline">INDEPENDENT </span>MULTI-PRODUCT TECH COMPANY
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-[28px] xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white text-sand-charcoal tracking-tight leading-[1.18] sm:leading-[1.12] mb-3 sm:mb-6">
              Engineering{' '}
              <span className="text-citron">
                Proprietary Digital Products
              </span>{' '}
              & Smart Hardware.
            </h1>

            {/* Technical Sub-Description */}
            <p className="text-xs sm:text-base lg:text-lg dark:text-titanium-200 text-sand-charcoal/80 leading-relaxed max-w-2xl mb-5 sm:mb-8 font-normal">
              <span className="sm:hidden">
                Independent software and hardware product engineering house founded in Kerala, India. Building proprietary applications and IoT hardware ecosystems across 5 core verticals.
              </span>
              <span className="hidden sm:inline">
                AstriOrb is an independent software and hardware product engineering house founded in Kerala, India. We design and build our own multi-domain software applications and IoT hardware ecosystems—solving real societal problems across finance, food tech, healthcare, team productivity, and smart mobility.
              </span>
            </p>

            {/* High-Impact CTAs */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-5 sm:mb-10">
              <Link
                to="/products"
                className="px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-citron text-obsidian shadow-lg shadow-citron/25 hover:bg-citron-light hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 group font-mono"
              >
                <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">
                  <span className="sm:hidden">Explore 5 Apps</span>
                  <span className="hidden sm:inline">Explore & Test 5 Products</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 group-hover:translate-x-1 transition-transform hidden xs:inline" />
              </Link>

              <button
                type="button"
                onClick={openProjectModal}
                className="px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold dark:bg-titanium-900/90 bg-white dark:text-white text-sand-charcoal border dark:border-white/15 border-sand-border hover:border-citron hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm font-mono truncate cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-citron" />
                <span className="truncate">Flagship: Tastory</span>
              </button>
            </div>

            {/* Live Indicator Strip */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs dark:text-titanium-300 text-sand-charcoal/70 font-mono">
              <span className="flex items-center gap-1.5 dark:text-white text-sand-charcoal">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="sm:hidden">FISCLOK v1.0.2 Live</span>
                <span className="hidden sm:inline">FISCLOK v1.0.2 Live on Play Store</span>
              </span>
              <span className="text-titanium-600">•</span>
              <span className="flex items-center gap-1.5 dark:text-white text-sand-charcoal">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-citron shrink-0" />
                <span className="sm:hidden">Tastory MVP Done</span>
                <span className="hidden sm:inline">Tastory MVP Completed (Funding Phase)</span>
              </span>
              <span className="text-titanium-600">•</span>
              <span>
                <span className="sm:hidden">Founder-Led R&D</span>
                <span className="hidden sm:inline">100% Founder-Led R&D</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Company Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center w-full"
          >
            <CompanyCodeCard />
          </motion.div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 sm:mt-12 pt-6 sm:pt-8 border-t dark:border-white/10 border-sand-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-[10px] sm:text-xs font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase tracking-wider mb-0.5 sm:mb-1">
                {metric.label}
              </span>
              <span className="text-lg sm:text-2xl font-bold dark:text-white text-sand-charcoal tracking-tight">
                {metric.value}
              </span>
              <span className="text-[11px] sm:text-xs dark:text-titanium-300 text-sand-charcoal/70 mt-0.5 leading-snug">
                {metric.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
