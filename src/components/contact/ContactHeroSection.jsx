import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Clock, ShieldCheck, Mail, Zap, MapPin } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const slaHighlights = [
  {
    icon: Clock,
    title: '< 24 Hour Response',
    detail: 'Direct reply from founders & engineers',
    color: 'text-citron',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Sales Harassment',
    detail: 'No automated marketing drip campaigns',
    color: 'text-emerald-400',
  },
  {
    icon: Zap,
    title: 'Direct Technical Access',
    detail: 'No non-technical middleman filters',
    color: 'text-laser-cyan',
  },
  {
    icon: MapPin,
    title: 'Kerala Global Hub',
    detail: 'IST (UTC +5:30) asynchronous coverage',
    color: 'text-purple-400',
  },
];

const ContactHeroSection = () => {
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
          <MessageSquare size={13} />
          <span className="hidden sm:inline">ASTRIORB INSTITUTIONAL GATEWAY // DIRECT CHANNELS</span>
          <span className="sm:hidden">INSTITUTIONAL GATEWAY // DIRECT</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-3 sm:mb-6 leading-tight">
          Direct Access to Leadership <br />
          <span className="bg-gradient-flame bg-clip-text text-transparent">
            & Engineering
          </span>
        </h1>

        <p className="text-xs sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 font-normal">
          Whether you are an angel syndicate reviewing Tastory’s seed round, a hospital network evaluating DocCo, an embedded hardware collaborator for Project ROW, or an active FISCLOK user — our lines are open.
        </p>
      </motion.div>

      {/* 4 SLA Cards (2x2 on mobile, 4 columns on desktop) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-6xl mx-auto"
      >
        {slaHighlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <SpotlightCard
              key={idx}
              className="p-3.5 sm:p-6 text-center flex flex-col items-center justify-between group hover:border-citron/40 transition-all shadow-sm"
              withCorners
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
              </div>

              <h3 className="text-xs sm:text-base font-bold font-mono dark:text-white text-sand-charcoal mb-0.5">
                {item.title}
              </h3>
              <p className="text-[10px] sm:text-xs font-mono dark:text-titanium-400 text-sand-charcoal/70">
                {item.detail}
              </p>
            </SpotlightCard>
          );
        })}
      </motion.div>
    </section>
  );
};

export default React.memo(ContactHeroSection);
