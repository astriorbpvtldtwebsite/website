import React from 'react';
import { motion } from 'framer-motion';
import { Shield, PieChart, Wallet, Ban, Download, ExternalLink, Star } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const features = [
  {
    Icon: Wallet,
    title: 'Expense & Income Tracking',
    description: 'Log every transaction effortlessly and stay on top of your money flow.',
  },
  {
    Icon: PieChart,
    title: 'Budget Monitoring & Charts',
    description: 'Set monthly budgets and visualize your financial health with intuitive charts.',
  },
  {
    Icon: Shield,
    title: '100% Local Storage',
    description: 'All data stays on your device with MMKV encryption. Nothing leaves your phone.',
  },
  {
    Icon: Ban,
    title: 'No Ads. No Tracking. Free.',
    description: 'Completely free forever — no premium tiers, no in-app purchases, no hidden charges.',
  },
];

const FisclokShowcase = () => {
  const handleMouseEnter = () => document.dispatchEvent(new Event('cursor-enter'));
  const handleMouseLeave = () => document.dispatchEvent(new Event('cursor-leave'));

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Section Header */}
      <motion.div
        variants={fadeInUp}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text dark:text-white mb-4 md:mb-6">
          Our Live <span className="bg-gradient-neon bg-clip-text text-transparent">Product</span>
        </h2>
        <p className="text-lg md:text-xl text-light-subtext dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Born from a real need to track expenses during the startup journey — now live and helping users manage their finances with zero compromises on privacy.
        </p>
      </motion.div>

      {/* Main Showcase Card */}
      <motion.div
        variants={fadeInUp}
        className="glass-effect rounded-2xl p-6 md:p-10 lg:p-12 relative overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 opacity-5 dark:opacity-5">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, #8b5cf6 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, #6366f1 0%, transparent 50%)',
                'radial-gradient(circle at 30% 40%, #8b5cf6 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: App Icon & Identity */}
          <motion.div
            className="flex flex-col items-center lg:items-center shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Glowing App Icon */}
            <div className="relative mb-6">
              <motion.div
                className="absolute -inset-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-3xl opacity-30 blur-xl"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img
                src="/fisclok_app_icon.png"
                alt="FISCLOK - Personal Finance Manager"
                className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl shadow-2xl"
              />
              {/* Live Badge */}
              <motion.div
                className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                LIVE
              </motion.div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-light-text dark:text-white mb-1">FISCLOK</h3>
            <p className="text-sm text-light-subtext dark:text-gray-400 mb-4">Personal Finance Manager</p>

            {/* Rating Preview */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-xs text-light-subtext dark:text-gray-400 ml-1">on Play Store</span>
            </div>

            {/* Download Button */}
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.astriorb.fincend"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-purple text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-cosmic-purple/30 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download on Google Play
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </motion.a>
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 flex-grow w-full"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white/5 dark:bg-white/5 bg-light-bg/50 backdrop-blur-sm rounded-xl p-5 border border-black/5 dark:border-white/10 group hover:border-cosmic-purple/30 dark:hover:border-cosmic-neon/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-purple rounded-lg flex items-center justify-center shrink-0 group-hover:animate-glow">
                    <feature.Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-text dark:text-white mb-1 text-sm md:text-base">{feature.title}</h4>
                    <p className="text-xs md:text-sm text-light-subtext dark:text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom: Legal Links */}
        <div className="relative z-10 flex items-center justify-center gap-4 mt-8 pt-6 border-t border-black/5 dark:border-white/10">
          <a href="/fisclok/privacy-policy" className="text-xs text-light-subtext dark:text-gray-500 hover:text-cosmic-purple dark:hover:text-cosmic-neon transition-colors">
            Privacy Policy
          </a>
          <span className="text-gray-300 dark:text-gray-700">•</span>
          <a href="/fisclok/terms" className="text-xs text-light-subtext dark:text-gray-500 hover:text-cosmic-purple dark:hover:text-cosmic-neon transition-colors">
            Terms of Service
          </a>
          <span className="text-gray-300 dark:text-gray-700">•</span>
          <span className="text-xs text-light-subtext dark:text-gray-500">Built with React Native</span>
        </div>
      </motion.div>
    </div>
  );
};

export default FisclokShowcase;
