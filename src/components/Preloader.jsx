import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-light-bg dark:bg-space-900"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-16 h-16 bg-gradient-neon rounded-lg flex items-center justify-center relative overflow-hidden mb-6 p-2"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-cosmic-neon opacity-20"
          />
          <img 
            src="/logo.png" 
            alt="AstriOrb Logo" 
            className="w-full h-full object-contain relative z-10"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="text-3xl font-bold text-light-text dark:text-white tracking-widest"
      >
        AstriOrb
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
