import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Home, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  const handleMouseEnter = () => document.dispatchEvent(new Event('cursor-enter'));
  const handleMouseLeave = () => document.dispatchEvent(new Event('cursor-leave'));

  return (
    <div className="min-h-screen bg-light-bg dark:bg-gradient-cosmic flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <SEO title="Page Not Found" description="The page you are looking for does not exist on AstriOrb." />

      {/* Floating Stars */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.8, 1.5, 0.8],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
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
          className="w-40 h-40 bg-gradient-neon rounded-full flex items-center justify-center mx-auto relative group shadow-2xl shadow-cosmic-purple/30 dark:shadow-cosmic-neon/20 p-1"
        >
          <div className="w-full h-full bg-space-900 dark:bg-space-900 rounded-full flex items-center justify-center text-white">
            <Compass className="w-20 h-20 text-cosmic-neon animate-pulse" />
          </div>
          {/* External Halo */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-neon rounded-full -z-10 blur-xl"
          />
        </motion.div>

        {/* 404 Header */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-7xl md:text-8xl font-black bg-gradient-neon bg-clip-text text-transparent tracking-tight font-inter"
          >
            404
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-light-text dark:text-white"
          >
            Lost in Orbit
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-light-subtext dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-sm mx-auto"
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
              className="w-full sm:w-auto bg-gradient-purple text-white px-8 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-cosmic-purple/20 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Return to Base</span>
            </Link>
          </motion.div>
          <motion.div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link
              to="/blog"
              className="w-full sm:w-auto bg-transparent border border-cosmic-purple dark:border-cosmic-neon text-cosmic-purple dark:text-cosmic-neon px-8 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center space-x-2 hover:bg-cosmic-purple/10 dark:hover:bg-cosmic-neon/10 transition-all"
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
