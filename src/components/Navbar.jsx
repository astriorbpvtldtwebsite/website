import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import AstriOrbLogo from './AstriOrbLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click & Escape key to close mobile menu
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Products', to: '/products' },
    { name: 'About', to: '/about' },
    { name: 'Blog', to: '/blog' },
    { name: 'Careers', to: '/careers' },
    { name: 'Contact', to: '/contact' },
  ];

  const handleNavClick = (e, item) => {
    setIsOpen(false);
    if (item.to === '/' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBrandClick = (e) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      <div
        className={`max-w-7xl mx-auto rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'dark:bg-obsidian/90 bg-sand/95 backdrop-blur-xl dark:border-white/10 border-sand-border shadow-xl dark:shadow-black/50 shadow-sand-charcoal/10 py-2.5 px-4 md:px-6'
            : 'dark:bg-obsidian/40 bg-sand/80 backdrop-blur-md dark:border-white/5 border-sand-border/60 py-3.5 px-4 md:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            onClick={handleBrandClick}
            className="flex items-center gap-3 group select-none"
          >
            <div className="relative w-9 h-9 rounded-xl dark:bg-titanium-800 bg-sand-border/80 border border-citron/40 p-0.5 shadow-md shadow-citron/15 group-hover:border-citron transition-all duration-300">
              <div className="w-full h-full dark:bg-obsidian bg-white rounded-[10px] flex items-center justify-center p-1.5">
                <AstriOrbLogo className="w-full h-full text-citron group-hover:text-citron-light transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight dark:text-white text-sand-charcoal group-hover:text-citron transition-colors font-mono">
                AstriOrb
              </span>
              <span className="hidden sm:flex items-center gap-1 text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-citron animate-pulse" />
                MULTI-PRODUCT LAB
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navItems.map((item) => {
              const isActive =
                item.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.to);

              return (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-citron dark:bg-white/5 bg-sand-border/60 border border-citron/30 shadow-sm'
                      : 'dark:text-titanium-300 text-sand-charcoal/80 dark:hover:text-white hover:text-sand-plum dark:hover:bg-white/[0.06] hover:bg-sand-border/30'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions (Theme Switcher) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle light/dark theme"
              className="h-9 px-3 rounded-xl flex items-center gap-2 text-xs font-mono dark:text-titanium-300 text-sand-charcoal dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border hover:border-citron/40 transition-colors select-none"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                </motion.div>
              </AnimatePresence>
              <span className="text-[11px] font-semibold">{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl flex items-center justify-center dark:text-titanium-300 text-sand-charcoal dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="w-9 h-9 rounded-xl flex items-center justify-center dark:text-white text-sand-charcoal dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t dark:border-white/10 border-sand-border mt-3 pt-3"
            >
              <div className="flex flex-col space-y-1 pb-3">
                {navItems.map((item) => {
                  const isActive =
                    item.to === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(item.to);

                  return (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`px-3.5 py-2.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                        isActive
                          ? 'text-citron dark:bg-white/5 bg-sand-border/60 border border-citron/30'
                          : 'dark:text-titanium-300 text-sand-charcoal dark:hover:text-white hover:text-sand-plum dark:hover:bg-white/5 hover:bg-sand-border/30'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
