import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Sun, Moon, Code2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useProjectModal } from '../contexts/ProjectModalContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { openProjectModal } = useProjectModal();

  const handleMouseEnter = () => document.dispatchEvent(new Event('cursor-enter'));
  const handleMouseLeave = () => document.dispatchEvent(new Event('cursor-leave'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-light-bg/80 dark:bg-space-900/95 backdrop-blur-lg border-b border-black/10 dark:border-white/10 shadow-lg dark:shadow-cosmic-purple/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              animate={{ rotate: scrolled ? 360 : 0 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 md:w-10 md:h-10 bg-gradient-neon rounded-lg flex items-center justify-center relative overflow-hidden p-1"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-cosmic-neon opacity-20"
              />
              <img 
                src="/logo.png" 
                alt="AstriOrb Logo" 
                className="w-full h-full object-contain relative z-10"
              />
            </motion.div>
            <span className="text-xl md:text-2xl font-bold text-light-text dark:text-white">AstriOrb</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  color: theme === 'dark' ? '#00d4aa' : '#6366f1',
                }}
                className="text-light-subtext dark:text-gray-300 hover:text-cosmic-purple dark:hover:text-cosmic-neon transition-all duration-200 font-medium relative group whitespace-nowrap px-2 py-1"
              >
                {item.name}
                <motion.div
                  layoutId={`underline-${item.name}`}
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-neon group-hover:w-full transition-all duration-200 ease-out"
                />
              </motion.a>
            ))}
            <motion.button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={openProjectModal}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-purple text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-cosmic-purple/25 transition-all duration-200 flex items-center space-x-2 whitespace-nowrap"
            >
              <Code2 className="w-4 h-4" />
              <span>Project:Tastory</span>
            </motion.button>
            <motion.div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-space-800 text-light-text dark:text-white"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
             <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-space-800 text-light-text dark:text-white"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-light-text dark:text-white p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden relative z-50"
        >
          <motion.div
            initial={false}
            animate={{ y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className="bg-light-card/95 dark:bg-space-800/95 backdrop-blur-lg rounded-lg mt-2 p-4 border border-black/10 dark:border-white/10 relative z-50"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="block py-3 text-light-subtext dark:text-gray-300 hover:text-cosmic-purple dark:hover:text-cosmic-neon transition-colors border-b border-black/5 dark:border-white/5 last:border-b-0"
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.replace('#', '');
                  const targetElement = document.getElementById(targetId);
                  
                  if (targetElement) {
                    setIsOpen(false);
                    setTimeout(() => {
                      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                  }
                }}
              >
                {item.name}
              </motion.a>
            ))}
                          <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 20,
                }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-gradient-purple text-white py-3 rounded-full font-medium flex items-center justify-center space-x-2"
                onClick={() => {
                  setIsOpen(false);  // Close mobile menu
                  openProjectModal(); // Open project modal
                }}
              >
                <Zap className="w-4 h-4" />
                <span>Project:Tastory</span>
              </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
