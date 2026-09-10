import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Home, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  const handleMouseEnter = () => document.dispatchEvent(new Event('cursor-enter'));
  const handleMouseLeave = () => document.dispatchEvent(new Event('cursor-leave'));

  const stars = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${(i * 19 + 7) % 94 + 3}%`,
      top: `${(i * 29 + 11) % 88 + 6}%`,
      duration: 2.5 + (i % 4) * 0.8,
    }));
  }, []);

  return (
    <div className="min-h-screen bg-sand dark:bg-obsidian text-sand-charcoal dark:text-white flex flex-col justify-center items-center px-4 relative overflow-hidden transition-colors duration-300">
      <SEO title="Page Not Found" description="The page you are looking for does not exist on AstriOrb." />

      {/* Floating Stars */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: star.left,
              top: star.top,
            }}
            animate={{
              scale: [0.8, 1.5, 0.8],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-md w-full text-center relative z-10 space-y-8">
        {/* Floating Compass / Logo Container */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-40 h-40 bg-gradient-flame rounded-full flex items-center justify-center mx-auto relative group shadow-2xl shadow-citron/25 p-1"
        >
          <div className="w-full h-full bg-sand-light dark:bg-abyss-900 rounded-full flex items-center justify-center text-white">
            <Compass className="w-20 h-20 text-citron animate-pulse" />
          </div>
          {/* External Halo */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-flame rounded-full -z-10 blur-xl opacity-30"
          />
        </motion.div>

        {/* 404 Header */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-7xl md:text-8xl font-black bg-gradient-flame bg-clip-text text-transparent tracking-tight font-inter"
          >
            404
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-sand-charcoal dark:text-white"
          >
            Lost in the Orb?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sand-charcoal/80 dark:text-titanium-300 text-sm md:text-base leading-relaxed max-w-sm mx-auto"
          >
            The coordinates you entered led to uncharted space. This page has drifted off course or never existed.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link
              to="/"
              className="w-full sm:w-auto bg-citron hover:bg-citron-hover text-obsidian px-8 py-3.5 rounded-full font-bold text-sm flex items-center justify-center space-x-2 shadow-lg hover:shadow-citron/25 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Return to Base</span>
            </Link>
          </motion.div>
          <motion.div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link
              to="/blog"
              className="w-full sm:w-auto bg-transparent border border-sand-border dark:border-white/20 text-sand-charcoal dark:text-titanium-200 hover:text-citron dark:hover:text-citron hover:border-citron px-8 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center space-x-2 transition-all"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Read Our Blog</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
