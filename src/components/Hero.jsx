import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Code, Lightbulb, Cpu, Database, Smartphone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const handleMouseEnter = () => document.dispatchEvent(new Event('cursor-enter'));
  const handleMouseLeave = () => document.dispatchEvent(new Event('cursor-leave'));

  const floatingIcons = [
    { Icon: Zap, delay: 0, position: 'top-1/4 left-1/4' },
    { Icon: Code, delay: 0.5, position: 'top-1/3 right-1/4' },
    { Icon: Lightbulb, delay: 1, position: 'bottom-1/3 left-1/2' },
    { Icon: Cpu, delay: 1.5, position: 'top-1/2 left-1/6' },
    { Icon: Database, delay: 2, position: 'bottom-1/4 right-1/3' },
    { Icon: Smartphone, delay: 2.5, position: 'top-2/3 right-1/6' },
  ];

  const techParticles = [...Array(10)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 6,
    delay: Math.random() * 8,
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-light-bg dark:bg-gradient-cosmic">
        <div className="bg-particles">
          {techParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-cosmic-purple to-cosmic-neon opacity-10 dark:opacity-30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, theme === 'dark' ? 0.6 : 0.2, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Floating Tech Icons */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            {floatingIcons.map(({ Icon, delay, position }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ 
                  opacity: [0, 1, 0.7, 0],
                  scale: [0, 1.2, 1, 0],
                  y: [-20, -120, -80, -150],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  delay: delay,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className={`absolute ${position}`}
              >
                <div className="w-12 h-12 bg-white/10 dark:bg-gradient-purple/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-cosmic-purple/30 dark:border-cosmic-neon/30">
                  <Icon className="w-6 h-6 text-cosmic-purple dark:text-cosmic-neon" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Company Name with Enhanced Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold bg-gradient-neon bg-clip-text text-transparent relative"
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(99, 102, 241, 0.5)",
                    "0 0 40px rgba(139, 92, 246, 0.7)",
                    "0 0 20px rgba(99, 102, 241, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                AstriOrb
              </motion.span>
            </motion.h1>

            {/* Animated Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-light-subtext dark:text-gray-300 font-light max-w-4xl mx-auto leading-relaxed px-4"
            >
              Where Ideas Orbit into Reality
            </motion.p>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg text-light-subtext dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
            >
              We are a cutting-edge product development company that creates innovative applications 
              and software solutions. From concept to deployment, we build our own revolutionary 
              products that solve real-world problems.
            </motion.p>

            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center items-center pt-6 md:pt-8 px-4"
            >
              <motion.a
                href="#contact"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 25px 50px rgba(99, 102, 241, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-purple text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg flex items-center space-x-2 hover:shadow-xl transition-all duration-300"
              >
                <span>Let's Build Together</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cosmic-purple dark:border-cosmic-neon rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [10, 30, 10] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cosmic-purple dark:bg-cosmic-neon rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
