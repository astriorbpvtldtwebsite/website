import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Globe, Code2, Users, Sparkles, MapPin, Zap } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const stats = [
  {
    icon: Code2,
    title: '100% Owned IP',
    detail: 'Zero outsourced client agency tickets',
    color: 'text-citron',
  },
  {
    icon: Globe,
    title: 'Remote-First',
    detail: 'Headquartered in Kerala, India',
    color: 'text-emerald-400',
  },
  {
    icon: Zap,
    title: 'Multi-Product Stack',
    detail: 'Mobile, Cloud, & Embedded IoT',
    color: 'text-laser-cyan',
  },
  {
    icon: Users,
    title: 'Direct Mentorship',
    detail: 'Work hands-on with founders',
    color: 'text-purple-400',
  },
];

const CareersHeroSection = () => {
  return (
    <section className="relative pt-4 sm:pt-6 pb-8 sm:pb-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full dark:bg-titanium-800/90 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider sm:tracking-widest mb-4 sm:mb-6 shadow-sm whitespace-nowrap">
          <Briefcase size={13} />
          <span className="hidden sm:inline">ASTRIORB TALENT ACQUISITION // VENTURE SQUAD INITIATION</span>
          <span className="sm:hidden">TALENT ACQUISITION // VENTURE SQUAD</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-4 sm:mb-6 leading-tight">
          Build Real Products, <br />
          <span className="bg-gradient-flame bg-clip-text text-transparent">
            Not Billable Client Hours
          </span>
        </h1>

        <p className="text-sm sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 font-normal">
          We are assembling an elite product engineering crew in Kerala. If you are passionate about solving authentic societal challenges across mobile apps, fullstack platforms, and connected IoT hardware with high autonomy, you belong here.
        </p>

        {/* Location pill */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl dark:bg-titanium-900 bg-sand-border/50 border dark:border-white/10 border-sand-border text-[11px] sm:text-xs font-mono dark:text-titanium-300 text-sand-charcoal/80 mb-8 sm:mb-12 whitespace-nowrap">
          <MapPin size={14} className="text-citron shrink-0" />
          <span className="hidden sm:inline">Remote-First • Physical Hardware Lab in Kerala, India</span>
          <span className="sm:hidden">Remote-First • Hardware Lab, Kerala</span>
        </div>
      </motion.div>

      {/* 4 Culture Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-6xl mx-auto"
      >
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <SpotlightCard
              key={idx}
              className="p-3.5 sm:p-6 text-center flex flex-col items-center justify-between group hover:border-citron/40 transition-all shadow-sm"
              withCorners
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color}`} />
              </div>

              <h3 className="text-xs sm:text-base font-bold font-mono dark:text-white text-sand-charcoal mb-0.5">
                {stat.title}
              </h3>
              <p className="text-[10px] sm:text-xs font-mono dark:text-titanium-400 text-sand-charcoal/70">
                {stat.detail}
              </p>
            </SpotlightCard>
          );
        })}
      </motion.div>
    </section>
  );
};

export default React.memo(CareersHeroSection);
