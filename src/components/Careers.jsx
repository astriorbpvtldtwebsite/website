import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Clock, TrendingUp, Code, Briefcase } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';
import SpotlightCard from './SpotlightCard';

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Mobile & Fullstack Engineer',
      department: 'Engineering',
      location: 'Remote (Kerala, India)',
      type: 'Full-time / Contract',
      description:
        'Help architect and scale frontends and backend services across our product portfolio using React Native, Flutter, and Node.js. Freshers with proven project delivery skills and deep technical curiosity are warmly encouraged.',
      tag: 'React Native • Flutter • TypeScript',
    },
    {
      title: 'Embedded Hardware & IoT Specialist',
      department: 'R&D / Project ROW',
      location: 'Hybrid / Remote (Kerala, India)',
      type: 'Contract / Project-Based',
      description:
        'Work directly with our founder on Project ROW, prototyping custom navigation hardware, Bluetooth LE telemetry, and low-power microcontroller firmware.',
      tag: 'C/C++ • BLE • PCB Prototyping',
    },
    {
      title: 'Clinical Data & Domain Researcher',
      department: 'HealthTech / DocCo',
      location: 'Remote (Kerala, India)',
      type: 'Flexible / Contract',
      description:
        'Collaborate on Project DocCo to synthesize clinical workflows, conduct healthcare practitioner interviews, and ensure medical data integrity.',
      tag: 'Healthcare Workflow • Research',
    },
    {
      title: 'Growth & Ecosystem Lead',
      department: 'Growth & Strategy',
      location: 'Remote (Kerala, India)',
      type: 'Part-time / Contract',
      description:
        'Lead product adoption for FISCLOK on Google Play, drive creator outreach for Tastory, and build organic tech community presence across digital channels.',
      tag: 'Product Marketing • Community',
    },
  ];

  const perks = [
    { Icon: Globe, title: 'Remote-First Culture', description: 'Work from anywhere with high agency and trust.' },
    { Icon: Code, title: 'Multi-Product Stack', description: 'Gain real exposure across mobile apps, SaaS, and custom IoT hardware.' },
    { Icon: Clock, title: 'Asynchronous Work', description: 'Results matter far more than rigid hours or endless meetings.' },
    { Icon: TrendingUp, title: 'Direct Mentorship', description: 'Collaborate hands-on with the founder without corporate bureaucracy.' },
  ];

  return (
    <div id="careers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-titanium-800/80 border border-citron/30 mb-4">
          <Briefcase className="w-3.5 h-3.5 text-citron" />
          <span className="text-xs font-mono font-semibold text-citron uppercase tracking-wider">
            TALENT & SQUAD INITIATION
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Build Real Products With Us
        </h2>
        <p className="text-base sm:text-lg text-titanium-300 leading-relaxed font-normal">
          We are assembling a tight-knit, high-velocity engineering crew in Kerala. If you are passionate about building real, enduring products instead of grinding on agency outsourcing, you belong here.
        </p>
      </motion.div>

      {/* Perks Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {perks.map((perk) => (
          <motion.div key={perk.title} variants={fadeInUp} whileHover={{ y: -4 }}>
            <SpotlightCard className="p-6 text-center h-full flex flex-col items-center" withCorners>
              <div className="w-12 h-12 rounded-xl bg-titanium-800 border border-white/10 text-citron flex items-center justify-center mb-4">
                <perk.Icon size={24} />
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-mono">{perk.title}</h3>
              <p className="text-xs text-titanium-300 leading-relaxed font-normal">{perk.description}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Openings */}
      <div className="space-y-4">
        {jobOpenings.map((job) => (
          <motion.div key={job.title} variants={fadeInUp}>
            <SpotlightCard className="p-6 sm:p-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-4" withCorners>
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h4 className="text-lg font-bold text-white font-mono">
                    {job.title}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-titanium-800 border border-white/10 text-citron">
                    {job.department}
                  </span>
                  <span className="text-xs font-mono text-titanium-400">
                    {job.location} • {job.type}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-titanium-200 leading-relaxed font-normal">
                  {job.description}
                </p>
                <div className="text-[11px] font-mono text-citron">
                  {job.tag}
                </div>
              </div>

              <Link
                to="/careers"
                className="px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-titanium-800 border border-white/10 hover:border-citron hover:text-citron text-white transition-colors shrink-0 flex items-center gap-1.5"
              >
                <span>APPLY / CONNECT</span>
                <ArrowRight size={13} />
              </Link>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Careers;