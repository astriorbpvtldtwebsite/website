import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb, Rocket, Users } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const About = () => {
  const values = [
    {
      Icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize industries by developing groundbreaking products that transform how people interact with technology and solve everyday challenges.',
    },
    {
      Icon: Eye,
      title: 'Our Vision', 
      description: 'To be the global leader in product innovation, creating technologies that shape the future and inspire the next generation of digital solutions.',
    },
    {
      Icon: Heart,
      title: 'Our Values',
      description: 'Innovation, excellence, and impact drive our product development. We believe in creating technology that not only works brilliantly but changes lives.',
    },
  ];

  const stats = [
    { Icon: Lightbulb, number: '3+', label: 'Projects in Progress' },
    { Icon: Rocket, number: '100k+', label: 'Hours of Development' },
    { Icon: Users, number: '5+', label: 'Team Members' },
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
          A product development powerhouse where innovation meets execution. We don't just build software—we create 
          revolutionary products that redefine industries and enhance human experiences.
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
                {number}
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
          <h3 className="text-2xl md:text-3xl font-semibold text-light-text dark:text-white mb-4 md:mb-6">Our Innovation Journey</h3>
          <p className="text-base md:text-lg text-light-subtext dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
            AstriOrb was founded with a singular vision: to create products that don't just solve problems, 
            but anticipate needs and create new possibilities. We are product creators, not service providers—
            every application we develop represents our own innovative ideas brought to life.
          </p>
          <p className="text-base md:text-lg text-light-subtext dark:text-gray-300 leading-relaxed">
            Our research and development lab continuously explores emerging technologies, from AI and machine 
            learning to blockchain and IoT, ensuring our products are always at the forefront of innovation. 
            We don't follow trends—we create them.
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
