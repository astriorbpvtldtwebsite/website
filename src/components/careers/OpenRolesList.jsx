import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Activity,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import SpotlightCard from '../SpotlightCard';
import { jobRoles } from '../../data/careersData';

const categories = [
  { id: 'all', label: 'All Roles (4)' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'hardware', label: 'Hardware R&D' },
  { id: 'health', label: 'HealthTech Research' },
  { id: 'growth', label: 'Growth & Community' },
];

const OpenRolesList = ({ onSelectRole }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredRoles = useMemo(() => {
    if (activeCategory === 'all') return jobRoles;
    return jobRoles.filter((job) => job.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="openings" className="mb-14 sm:mb-20 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider sm:tracking-widest mb-2.5 sm:mb-3 whitespace-nowrap">
          <Briefcase size={13} />
          <span className="hidden sm:inline">CURRENT SQUAD OPENINGS</span>
          <span className="sm:hidden">SQUAD OPENINGS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-3 sm:mb-4">
          Open Engineering Roles
        </h2>
        <p className="text-xs sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
          Select any role below to review key responsibilities and submit your portfolio directly.
        </p>

        {/* Category Filter Pills (swipeable horizontal on mobile) */}
        <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center sm:justify-center gap-1.5 sm:gap-2 mt-5 sm:mt-8 pb-1 px-4 sm:px-0 -mx-4 sm:mx-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                type="button"
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${isActive
                    ? 'bg-citron text-obsidian shadow-md shadow-citron/25'
                    : 'dark:bg-titanium-900/70 bg-sand-border/50 dark:text-titanium-300 text-sand-charcoal/80 border dark:border-white/5 border-sand-border hover:border-citron/40 hover:text-citron'
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Roles Grid */}
      <div className="space-y-4 sm:space-y-6 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredRoles.map((job) => (
            <motion.div
              key={job.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <SpotlightCard
                className="p-4 sm:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 group hover:border-citron/40 transition-all shadow-sm rounded-xl sm:rounded-2xl"
                withCorners
              >
                <div className="space-y-2.5 sm:space-y-3 max-w-3xl flex-grow">
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
                    <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-mono font-bold dark:bg-titanium-800 bg-sand-border/70 border dark:border-white/10 border-sand-border text-citron">
                      {job.department}
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono dark:text-titanium-400 text-sand-charcoal/70 flex items-center gap-1">
                      <MapPin size={12} />
                      {job.location}
                    </span>
                    <span className="text-xs font-mono dark:text-titanium-500 text-sand-charcoal/40">•</span>
                    <span className="text-[11px] sm:text-xs font-mono dark:text-titanium-400 text-sand-charcoal/70 flex items-center gap-1">
                      <Clock size={12} />
                      {job.type}
                    </span>
                    <span className="text-xs font-mono dark:text-titanium-500 text-sand-charcoal/40">•</span>
                    <span className="text-[11px] sm:text-xs font-mono text-emerald-400">
                      {job.experience}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-bold font-mono dark:text-white text-sand-charcoal group-hover:text-citron transition-colors">
                    {job.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm dark:text-titanium-200 text-sand-charcoal/80 leading-relaxed font-normal">
                    {job.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {job.highlights.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs dark:text-titanium-300 text-sand-charcoal/80"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-citron shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1.5 sm:pt-2">
                    {job.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/5 border-sand-border text-[10px] sm:text-[11px] font-mono dark:text-titanium-300 text-sand-charcoal"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <div className="shrink-0 w-full lg:w-auto pt-3 sm:pt-4 lg:pt-0 border-t lg:border-t-0 dark:border-white/10 border-sand-border flex justify-end">
                  <button
                    type="button"
                    onClick={() => onSelectRole(job)}
                    className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs font-mono font-bold bg-citron text-obsidian shadow-lg shadow-citron/25 hover:bg-citron-light transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>APPLY FOR ROLE</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default React.memo(OpenRolesList);
