import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AstriOrbLogo from './AstriOrbLogo';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2100; // 2.1s to reach 100%, leaving 400ms for smooth completion

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(updateProgress);
      }
    };

    const frameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between dark:bg-obsidian bg-sand dark:text-white text-sand-charcoal select-none px-6 py-12 overflow-hidden transition-colors duration-300"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
        filter: 'blur(8px)',
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top Bar Brand Marker */}
      <div className="w-full max-w-sm flex items-center justify-between text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-citron animate-pulse" />
          <span>ASTRIORB PVT. LTD.</span>
        </span>
        <span className="dark:text-titanium-400 text-sand-charcoal/60 font-mono">INC. 2025</span>
      </div>

      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full dark:bg-citron-dim bg-citron/15 blur-[130px] pointer-events-none opacity-60" />

      {/* Centerpiece: Elegant Brand Icon & Minimalist Typography */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Sleek Logo Emblem */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-20 h-20 rounded-2xl dark:bg-titanium-900/80 bg-white/90 border dark:border-white/10 border-sand-border p-3 shadow-2xl dark:shadow-black/60 shadow-sand-charcoal/10 backdrop-blur-xl flex items-center justify-center mb-6"
        >
          {/* Subtle Golden Ambient Ring */}
          <div className="absolute inset-0 rounded-2xl border dark:border-citron/20 border-citron/35 pointer-events-none" />

          <AstriOrbLogo className="w-full h-full text-citron drop-shadow-[0_0_15px_rgba(234,146,22,0.35)]" />
        </motion.div>

        {/* Company Title */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-2xl font-bold tracking-tight dark:text-white text-sand-charcoal font-mono"
        >
          AstriOrb
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xs font-mono dark:text-titanium-300 text-sand-charcoal/70 mt-1.5 tracking-wide"
        >
          Independent Product Engineering House
        </motion.p>

        {/* Hairline Minimalist Progress Indicator */}
        <div className="mt-8 flex flex-col items-center w-56">
          {/* 2px Track */}
          <div className="w-full h-[2px] dark:bg-white/10 bg-sand-border rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-citron to-coral rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          {/* Discreet Percentage Counter */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60 mt-3">
            <span>{progress < 100 ? 'Initializing...' : 'Ready'}</span>
            <span className="text-citron font-semibold tabular-nums">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div className="relative z-10 text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 text-center tracking-wider">
        <span>KERALA, INDIA // 5 PROPRIETARY PRODUCTS</span>
      </div>
    </motion.div>
  );
};

export default React.memo(Preloader);

