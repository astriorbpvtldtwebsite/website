import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Users, Award, Clock, Globe, Lightbulb, ChevronDown } from 'lucide-react';
import useMediaQuery from '../hooks/useMediaQuery';

const reasons = [
  {
    Icon: Lightbulb,
    title: 'Product Innovation',
    description: 'We are shaping innovative digital solutions that aim to transform industries and elevate everyday experiences. Our focus is on research, experimentation, and building products that stand out in the market.',
    stat: 'In Progress',
    statLabel: 'Solutions',
  },
  {
    Icon: Rocket,
    title: 'Innovation at Core',
    description: 'We explore and adopt cutting-edge technologies like AI, blockchain, and cloud computing to craft future-ready solutions. Innovation drives every step of our journey.',
    stat: 'Driven',
    statLabel: 'By Innovation',
  },
  {
    Icon: Users,
    title: 'User-Centric Design',
    description: 'Every solution we create begins with the user in mind. We design products that are intuitive, engaging, and built to solve real-world problems.',
    stat: '100%',
    statLabel: 'UX Focused',
  },
  {
    Icon: Award,
    title: 'Market Impact',
    description: 'We aim to create meaningful change by building software that empowers businesses and enhances everyday life. Our success is measured by the value and opportunities we deliver to clients and users.',
    stat: 'Vision',
    statLabel: 'For Impact',
  },
  {
    Icon: Clock,
    title: 'Rapid Development',
    description: 'We follow agile practices to turn ideas into prototypes and working solutions quickly. Our iterative approach ensures continuous improvement, adaptability, and efficiency throughout the development journey.',
    stat: 'Agile',
    statLabel: 'Methodology',
  },
  {
    Icon: Globe,
    title: 'Global Reach',
    description: 'We design our solutions with a global mindset, ensuring they are scalable, adaptable, and inclusive for diverse audiences. Our ambition is to create products that can impact users worldwide.',
    stat: 'Future',
    statLabel: 'Worldwide Impact',
  },
];

const DesktopView = ({ selected, setSelected }) => {
  const handleMouseEnter = () => document.dispatchEvent(new Event('cursor-enter'));
  const handleMouseLeave = () => document.dispatchEvent(new Event('cursor-leave'));
  const selectedReason = reasons[selected];
  const SelectedIcon = selectedReason.Icon;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 min-h-[450px]">
      <div className="lg:col-span-1 flex flex-col justify-center space-y-2">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setSelected(index)}
            className={`p-4 rounded-lg transition-all duration-300 cursor-pointer relative ${
              selected === index 
                ? 'bg-black/5 dark:bg-white/10' 
                : 'bg-transparent hover:bg-black/[0.02] dark:hover:bg-white/[0.03]'
            }`}
          >
            <div className="flex items-center space-x-4">
              <reason.Icon className={`w-6 h-6 transition-colors ${selected === index ? 'text-cosmic-purple dark:text-cosmic-neon' : 'text-light-subtext dark:text-gray-400'}`} />
              <h3 className={`text-lg font-medium transition-colors ${selected === index ? 'text-light-text dark:text-white' : 'text-light-subtext dark:text-gray-300'}`}>{reason.title}</h3>
            </div>
            {selected === index && (
              <motion.div layoutId="why-us-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-neon" />
            )}
          </motion.div>
        ))}
      </div>
      <div className="lg:col-span-2 glass-effect rounded-xl p-8 md:p-12 flex items-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="w-24 h-24 md:w-32 md:h-32 bg-gradient-purple rounded-full flex items-center justify-center flex-shrink-0 animate-glow"
              >
                <SelectedIcon className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </motion.div>
              <div>
                <div className="mb-4 text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent leading-tight inline-block align-bottom mb-1">{selectedReason.stat}</div>
                  <div className="text-sm text-cosmic-purple dark:text-cosmic-neon font-medium tracking-wider uppercase">{selectedReason.statLabel}</div>
                </div>
                <p className="text-base md:text-lg text-light-subtext dark:text-gray-300 leading-relaxed text-center md:text-left">{selectedReason.description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const MobileView = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {reasons.map((reason, index) => (
        <div key={reason.title} className="glass-effect rounded-xl overflow-hidden">
          <motion.header
            className="p-4 cursor-pointer flex justify-between items-center"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center space-x-4">
              <reason.Icon className="w-6 h-6 text-cosmic-purple dark:text-cosmic-neon" />
              <h3 className="text-lg font-medium text-light-text dark:text-white">{reason.title}</h3>
            </div>
            <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="w-6 h-6 text-light-subtext dark:text-gray-400" />
            </motion.div>
          </motion.header>
          <AnimatePresence>
            {openIndex === index && (
              <motion.section
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="px-4 pb-4"
              >
                <div className="border-t border-black/10 dark:border-white/10 pt-4">
                  <div className="mb-4">
                    <div className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-1">{reason.stat}</div>
                    <div className="text-xs text-cosmic-purple dark:text-cosmic-neon font-medium tracking-wider uppercase">{reason.statLabel}</div>
                  </div>
                  <p className="text-light-subtext dark:text-gray-300 leading-relaxed">{reason.description}</p>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const WhyChooseUs = () => {
  const [selected, setSelected] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      onMouseEnter={() => document.dispatchEvent(new Event('cursor-enter'))}
      onMouseLeave={() => document.dispatchEvent(new Event('cursor-leave'))}
    >
      <div className="absolute inset-0 -bottom-8 md:-bottom-12 opacity-5 dark:opacity-5">
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-neon"
          style={{ backgroundSize: '400% 400%' }}
        />
      </div>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text dark:text-white mb-4 md:mb-6">
          Why Choose <span className="bg-gradient-neon bg-clip-text text-transparent leading-tight inline-block align-bottom">AstriOrb</span>
        </h2>
        <p className="text-lg md:text-xl text-light-subtext dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          When you choose AstriOrb products, you're choosing innovation, reliability, and a commitment 
          to pushing the boundaries of what's possible in technology.
        </p>
      </div>
      {isDesktop ? <DesktopView selected={selected} setSelected={setSelected} /> : <MobileView />}
    </div>
  );
};

export default WhyChooseUs;
