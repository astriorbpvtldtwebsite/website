import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Clock, HeartPulse, TrendingUp, Code, Users } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const Careers = () => {
  const handleMouseEnter = () => document.dispatchEvent(new Event('cursor-enter'));
  const handleMouseLeave = () => document.dispatchEvent(new Event('cursor-leave'));

  const jobOpenings = [
  {
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote (Kerala, India)',
    type: 'Full-time / Contract',
    description: 'Take ownership of building and refining our web and mobile app frontends using modern frameworks like React or Flutter. We welcome freshers who can demonstrate strong skills, creativity, and the confidence to deliver production-ready work in a fast-moving startup environment.',
  },
  {
    title: 'Chief Financial Officer (CFO)',
    department: 'Leadership',
    location: 'Remote (Kerala, India)',
    type: 'Part-time / Contract',
    description: 'As an early-stage CFO, you will guide AstriOrb in financial planning, funding strategies, and budgeting. Perfect for finance professionals or skilled graduates looking to grow into a leadership role in a startup environment.',
  },
  {
    title: 'Chief Marketing Officer (CMO)',
    department: 'Leadership & Growth',
    location: 'Remote (Kerala, India)',
    type: 'Part-time / Contract',
    description: 'Lead our brand growth and marketing efforts from the ground up. Ideal for creative marketers and freshers who can show confidence in digital campaigns, community building, and storytelling that helps AstriOrb stand out in the software industry.',
  },
  {
    title: 'Data Collection Specialist',
    department: 'Research & Development',
    location: 'Remote (Kerala, India)',
    type: 'Flexible',
    description: 'Assist in gathering, organizing, and preparing datasets that fuel our product development and research. This role is open to freshers with analytical skills, attention to detail, and a willingness to learn in a fast-paced startup setting.',
  },
  ];

  const perks = [
    { Icon: Globe, title: 'Remote-First Culture', description: 'Work from anywhere in the world.' },
    { Icon: Clock, title: 'Flexible Hours', description: 'We trust you to manage your own time.' },
    { Icon: HeartPulse, title: 'Health & Wellness', description: 'Comprehensive benefits for you and your family.' },
    { Icon: TrendingUp, title: 'Professional Growth', description: 'Generous budget for learning and development.' },
    { Icon: Code, title: 'Cutting-Edge Tech', description: 'Work with the latest tools and frameworks.' },
    { Icon: Users, title: 'Innovation Time', description: 'Dedicated time to explore your own ideas.' },
  ];

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 opacity-5 dark:opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-neon rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <motion.div 
        variants={fadeInUp}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text dark:text-white mb-4 md:mb-6">
          Join Our <span className="bg-gradient-neon bg-clip-text text-transparent">Mission</span>
        </h2>
        <p className="text-lg md:text-xl text-light-subtext dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We're looking for passionate innovators, creative thinkers, and brilliant minds to help us build the future of technology.
        </p>
      </motion.div>

      {/* Perks Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
      >
        {perks.map((perk) => (
          <motion.div
            key={perk.title}
            variants={fadeInUp}
            className="glass-effect p-6 rounded-xl text-center group"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow"
            >
              <perk.Icon className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-lg font-semibold text-light-text dark:text-white mb-2">{perk.title}</h3>
            <p className="text-sm text-light-subtext dark:text-gray-300">{perk.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Job Openings */}
      <motion.div
        variants={fadeInUp}
        className="mb-12 md:mb-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-light-text dark:text-white text-center mb-8 md:mb-12">
          Current Openings
        </h3>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-6"
        >
          {jobOpenings.map((job) => (
            <motion.div
              key={job.title}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass-effect rounded-xl p-6 md:p-8 group hover:shadow-xl dark:hover:shadow-cosmic-purple/20 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="flex-grow mb-4 md:mb-0">
                <div className="flex items-center space-x-4 mb-2">
                  <h4 className="text-lg md:text-xl font-semibold text-light-text dark:text-white group-hover:text-cosmic-purple dark:group-hover:text-cosmic-neon transition-colors">
                    {job.title}
                  </h4>
                  <span className="bg-cosmic-purple/10 dark:bg-cosmic-neon/10 text-cosmic-purple dark:text-cosmic-neon px-2 py-1 rounded-full text-xs font-medium">
                    {job.department}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-light-subtext dark:text-gray-400 mb-3">
                  <span>{job.location}</span>
                  <span>&bull;</span>
                  <span>{job.type}</span>
                </div>
                <p className="text-light-subtext dark:text-gray-300 text-sm leading-relaxed max-w-2xl">
                  {job.description}
                </p>
              </div>
              <motion.a
                href={`mailto:astriorbofficial@gmail.com?subject=Application for ${job.title}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 bg-gradient-purple text-white px-6 py-2.5 rounded-full font-medium text-sm flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        variants={fadeInUp}
        className="glass-effect rounded-xl p-6 md:p-8 text-center relative overflow-hidden"
      >
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-cosmic-purple/10 via-cosmic-neon/10 to-cosmic-purple/10 opacity-50"
        />
        
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-light-text dark:text-white mb-4">Don't See a Fit?</h3>
          <p className="text-light-subtext dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. If you believe you have what it takes to contribute to our mission, send us your resume.
          </p>
          <motion.a
            href="mailto:astriorbofficial@gmail.com?subject=General Application"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-cosmic-purple dark:border-cosmic-neon text-cosmic-purple dark:text-cosmic-neon px-8 py-3 rounded-full font-medium hover:bg-cosmic-purple/10 dark:hover:bg-cosmic-neon/10 transition-all duration-200"
          >
            Submit General Application
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Careers;