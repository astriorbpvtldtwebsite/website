import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Building2,
  Layers,
  Code2,
  UserCheck,
  ShieldAlert,
  Sparkles,
  Cpu,
  MapPin,
} from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const parseStat = (str) => {
  const match = str.match(/^(\d+)(.*)/);
  return match ? { value: parseInt(match[1], 10), suffix: match[2] } : { value: 0, suffix: str };
};

const AnimatedNumber = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target]);

  useEffect(() => {
    if (isInView) animate();
  }, [isInView, animate]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const stats = [
  {
    icon: Layers,
    number: '5',
    label: 'Proprietary Products',
    detail: 'FinTech, FoodTech, Health, IoT, OS',
    color: 'text-citron',
  },
  {
    icon: Code2,
    number: '3,000+',
    label: 'Solo Founder Hours',
    detail: '7 days/week: coding, research & networking since Sept 2025',
    color: 'text-emerald-400',
  },
  {
    icon: UserCheck,
    number: '100%',
    label: 'Founder-Led Architecture',
    detail: 'Zero middle-management friction',
    color: 'text-laser-cyan',
  },
  {
    icon: Cpu,
    number: '0%',
    label: 'Outsourced Agency Work',
    detail: '100% proprietary owned IP',
    color: 'text-purple-400',
  },
];

const AboutHeroSection = () => {
  return (
    <section className="relative pt-6 pb-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full dark:bg-titanium-800/90 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-normal sm:tracking-widest mb-4 sm:mb-6 shadow-sm max-w-full">
          <Building2 size={13} className="shrink-0" />
          <span className="whitespace-nowrap truncate">
            <span className="sm:hidden">ASTRIORB // KERALA, INDIA</span>
            <span className="hidden sm:inline">ASTRIORB PVT. LTD. // FOUNDED IN KERALA, INDIA</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-4 sm:mb-6 leading-tight">
          Engineering Enduring Products. <br />
          <span className="bg-gradient-flame bg-clip-text text-transparent">
            From Kerala to the World.
          </span>
        </h1>

        <p className="text-xs sm:text-base lg:text-lg dark:text-titanium-300 text-sand-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-5 sm:mb-8 font-normal">
          AstriOrb is an independent product engineering and venture studio founded in 2025 by Mohammed Hashim. We refuse the limitations of outsourcing IT services and single-feature apps. We conceive, research, and engineer our own software ecosystems and smart IoT hardware.
        </p>

        {/* Origin Location Pill */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl dark:bg-titanium-900 bg-sand-border/50 border dark:border-white/10 border-sand-border text-[11px] sm:text-xs font-mono dark:text-titanium-300 text-sand-charcoal/80 mb-8 sm:mb-12 max-w-full">
          <MapPin size={13} className="text-citron shrink-0" />
          <span className="whitespace-nowrap truncate">
            <span className="sm:hidden">Kerala, India • Global Distribution</span>
            <span className="hidden sm:inline">Headquartered in Kerala, India • Global Digital Distribution</span>
          </span>
        </div>
      </motion.div>

      {/* 4 Animated Metric Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto"
      >
        {stats.map((stat, idx) => {
          const { value, suffix } = parseStat(stat.number);
          const Icon = stat.icon;
          return (
            <SpotlightCard
              key={idx}
              className="p-3.5 sm:p-6 text-center flex flex-col items-center justify-between group hover:border-citron/40 transition-all shadow-sm"
              withCorners
            >
              <div className="w-11 h-11 rounded-xl dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold dark:text-white text-sand-charcoal tracking-tight font-mono mb-1">
                <AnimatedNumber target={value} suffix={suffix} />
              </div>

              <h4 className="text-xs font-bold font-mono dark:text-titanium-200 text-sand-charcoal mb-0.5">
                {stat.label}
              </h4>
              <p className="text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
                {stat.detail}
              </p>
            </SpotlightCard>
          );
        })}
      </motion.div>
    </section>
  );
};

export default React.memo(AboutHeroSection);
