import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, ArrowUp, Twitter, Github, Globe } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';
import { LiquidMetal } from '@paper-design/shaders-react';

const Footer = () => {
  const handleMouseEnter = () => document.dispatchEvent(new Event('cursor-enter'));
  const handleMouseLeave = () => document.dispatchEvent(new Event('cursor-leave'));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Innovation Lab', href: '#services' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Product Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Developer Tools', href: '#' },
      { name: 'Beta Program', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'License Agreement', href: '/license' },
      { name: 'GDPR Compliance', href: '/gdpr' },
    ],
  };

  const socialLinks = [
    { Icon: Mail, href: 'mailto:astriorbofficial@gmail.com', label: 'Email' },
    { Icon: Linkedin, href: 'https://linkedin.com/company/astriorb', label: 'LinkedIn' },
    { Icon: Twitter, href: 'https://twitter.com/astriorb', label: 'Twitter' },
    { Icon: Github, href: 'https://github.com/astriorb', label: 'GitHub' },
    { Icon: Globe, href: 'https://astriorb.com', label: 'Website' },
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-light-card dark:bg-space-900 border-t border-black/10 dark:border-white/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 dark:opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full bg-gradient-to-br from-cosmic-purple to-cosmic-neon"
          style={{ backgroundSize: '200% 200%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-1">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <LiquidMetal
                    speed={1}
                    colorBack="#00000000"
                    colorTint="#FFFFFF"
                    softness={0.1}
                    repetition={2}
                    shiftRed={0.3}
                    shiftBlue={0.3}
                    distortion={0.07}
                    contour={0.4}
                    scale={0.6}
                    rotation={0}
                    shape="diamond"
                    image="/logo.png"
                    angle={70}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '0.5rem'
                    }}
                  />
                </div>
                <span className="text-2xl md:text-3xl font-bold text-light-text dark:text-white">AstriOrb</span>
              </div>
              <p className="text-light-subtext dark:text-gray-300 leading-relaxed max-w-md text-sm md:text-base">
                Where Ideas Orbit into Reality
              </p>
              <div className="flex space-x-3 md:space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gradient-purple rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-cosmic-purple/25 transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <social.Icon className="w-5 h-5 text-white group-hover:text-cosmic-neon transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {['company', 'resources'].map((key) => (
            <motion.div variants={fadeInUp} key={key}>
              <h4 className="text-light-text dark:text-white font-semibold mb-4 md:mb-6 capitalize">{key}</h4>
              <ul className="space-y-3">
                {footerLinks[key].map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      whileHover={{ x: 5, color: '#6366f1' }}
                      className="text-light-subtext dark:text-gray-300 dark:hover:text-cosmic-neon transition-all duration-200 text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="border-t border-black/10 dark:border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-light-subtext dark:text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} AstriOrb Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm justify-center">
            {footerLinks.legal.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={link.href}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="text-light-subtext dark:text-gray-400 hover:text-cosmic-purple dark:hover:text-cosmic-neon transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.button
            onClick={scrollToTop}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-gradient-purple rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-cosmic-purple/25 transition-all duration-200 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-white group-hover:text-cosmic-neon transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
