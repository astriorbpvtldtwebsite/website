import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb, Rocket, User } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

// Parse a stat string like "6000+" into { value: 6000, suffix: "+" }
const parseStat = (str) => {
  const match = str.match(/^(\d+)(.*)/);
  return match ? { value: parseInt(match[1], 10), suffix: match[2] } : { value: 0, suffix: str };
};

const AnimatedNumber = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart for a snappy start that decelerates
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target]);

  useEffect(() => {
    if (isInView) animate();
  }, [isInView, animate]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const About = () => {
  const values = [
    {
      Icon: Target,
      title: 'Our Mission',
      description: 'To solve real-world problems through software and build a better, simpler society. We identify everyday challenges and turn them into products that make a tangible difference in people\'s lives.',
    },
    {
      Icon: Eye,
      title: 'Our Vision',
      description: 'To grow AstriOrb into a globally recognized product company built from India — known for shipping useful, well-crafted software across multiple domains including food, finance, AI, gaming, and beyond.',
    },
    {
      Icon: Heart,
      title: 'Our Values',
      description: 'User-first thinking, transparency, and quality over quantity. We respect our users\' privacy, we don\'t cut corners, and we only ship products we\'d use ourselves.',
    },
  ];

  const stats = [
    { Icon: Lightbulb, number: '3+', label: 'Projects in Progress' },
    { Icon: Rocket, number: '6000+', label: 'Hours of Development' },
    { Icon: User, number: '100%', label: 'Founder-Led' },
  ];

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => document.dispatchEvent(new Event('cursor-enter'))}
      onMouseLeave={() => document.dispatchEvent(new Event('cursor-leave'))}
    >
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        className="text-center mb-12 md:mb-16"
      >
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text dark:text-white mb-4 md:mb-6"
        >
          About <span className="bg-gradient-neon bg-clip-text text-transparent">AstriOrb</span>
        </h2>
        <p className="text-lg md:text-xl text-light-subtext dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          AstriOrb Pvt. Ltd. is a product development company founded in 2025 by Mohammed Hashim in Kerala, India.
          We build software products that solve real-world problems — from food platforms and finance tools
          to AI solutions and game development — with the goal of creating a better, simpler society.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
      >
        {stats.map((stat) => {
          const { Icon, number, label } = stat;
          const { value, suffix } = parseStat(number);
          return (
            <motion.div
              key={label}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass-effect rounded-xl p-6 md:p-8 text-center group hover:shadow-xl dark:hover:shadow-cosmic-purple/20 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow"
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
              <div
                className="text-3xl md:text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-2"
              >
                <AnimatedNumber target={value} suffix={suffix} />
              </div>
              <p className="text-light-subtext dark:text-gray-300 font-medium">{label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Story Section */}
      <motion.div
        variants={fadeInUp}
        className="glass-effect rounded-2xl p-6 md:p-12 mb-12 md:mb-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5 dark:opacity-5">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-light-text dark:text-white mb-4 md:mb-6">Why AstriOrb Exists</h3>
          <p className="text-base md:text-lg text-light-subtext dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
            India has no shortage of startups — young founders launch companies every day. But look closely, and you'll
            notice a pattern: most are single-product companies. Kerala, despite its talent and ambition, still doesn't
            have a multi-product innovation company like Google or Zoho — one that tackles real-world problems across domains,
            not just one idea and done.
          </p>
          <p className="text-base md:text-lg text-light-subtext dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
            That's the gap AstriOrb was built to fill. We believe the best solutions come from those who truly understand the
            problem — not from pitching ideas through layers of corporate structure, but from building them directly.
            Every project at AstriOrb is born from a real problem that real people face. We research it deeply,
            design the right solution, and build it end to end.
          </p>
          <p className="text-base md:text-lg text-light-subtext dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
            We're not a single-project company, and we're not a service-based company. We're a problem-solving company.
            We apply the same approach to every product: identify a genuine problem in society, conduct thorough R&D,
            and deliver a solution that actually works. If someone comes to us with a problem worth solving, we empower
            them with the full support of our team to bring it to life.
          </p>
          <p className="text-base md:text-lg text-light-subtext dark:text-gray-300 leading-relaxed">
            That's why Tastory exists. That's why FISCLOK exists. And that's why what comes next will follow
            the same principle — find the problem, understand it deeply, and fix it right.
          </p>
        </div>
      </motion.div>

      {/* Values Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {values.map((value) => {
          const { Icon, title, description } = value;
          return (
            <motion.div
              key={title}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-xl p-6 md:p-8 text-center group hover:shadow-xl dark:hover:shadow-cosmic-purple/20 transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/10 to-cosmic-neon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:animate-glow"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-lg md:text-xl font-semibold text-light-text dark:text-white mb-3 md:mb-4">{title}</h4>
                <p className="text-sm md:text-base text-light-subtext dark:text-gray-300 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default About;
