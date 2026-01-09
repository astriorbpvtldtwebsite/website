import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Code2, Smartphone, Brain, Database, Cloud, Zap } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiSupabase } from 'react-icons/si';
import { staggerContainer, fadeInUp } from '../utils/animations';
import useMediaQuery from '../hooks/useMediaQuery';
import ComingSoonModal from './ComingSoonModal';

const TechIcon = ({ tech, mouseX, mouseY, containerWidth, containerHeight, isDesktop }) => {
  const randomX = useRef(Math.random() * 2 - 1).current;
  const randomY = useRef(Math.random() * 2 - 1).current;

  const x = useTransform(mouseX, [0, containerWidth], [10 * randomX, -10 * randomX]);
  const y = useTransform(mouseY, [0, containerHeight], [10 * randomY, -10 * randomY]);

  const motionStyle = isDesktop ? { x, y } : {};
  const IconComponent = tech.icon;

  return (
    <motion.div
      style={motionStyle}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      whileHover={{ scale: 1.15, y: isDesktop ? -8 : 0 }}
      className="flex flex-col items-center justify-center space-y-2"
    >
      <IconComponent className={`text-4xl md:text-5xl ${tech.className || ''}`} />
      <span className="text-xs md:text-sm text-light-subtext dark:text-gray-300 font-medium">{tech.name}</span>
    </motion.div>
  );
};

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExploreClick = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleMouseEnter = () => document.dispatchEvent(new Event('cursor-enter'));
  const handleMouseLeave = () => document.dispatchEvent(new Event('cursor-leave'));

  const techContainerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    const updateContainerSize = () => {
      if (techContainerRef.current) {
        setContainerSize({
          width: techContainerRef.current.offsetWidth,
          height: techContainerRef.current.offsetHeight,
        });
      }
    };

    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);

    if (techContainerRef.current) {
      mouseX.set(techContainerRef.current.offsetWidth / 2);
      mouseY.set(techContainerRef.current.offsetHeight / 2);
    }

    return () => window.removeEventListener('resize', updateContainerSize);
  }, [mouseX, mouseY]);

  const handleMouseMove = (e) => {
    if (!techContainerRef.current || !isDesktop) return;
    const rect = techContainerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeaveContainer = () => {
    if (!isDesktop) return;
    mouseX.set(containerSize.width / 2);
    mouseY.set(containerSize.height / 2);
  };

  const productCategories = [
    {
      Icon: Code2,
      title: 'Web Applications',
      description: 'Revolutionary web platforms that transform industries with cutting-edge user experiences and powerful functionality.',
      products: ['SaaS Platforms', 'Progressive Web Apps', 'Enterprise Dashboards', 'E-commerce Solutions'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      Icon: Smartphone,
      title: 'Mobile Innovation',
      description: 'Next-generation mobile applications that leverage device capabilities to create unprecedented user experiences.',
      products: ['Cross-Platform Apps', 'Native iOS/Android', 'AR/VR Mobile Apps', 'IoT Mobile Controls'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      Icon: Brain,
      title: 'AI-Powered Products',
      description: 'Intelligent applications that learn, adapt, and provide insights through advanced artificial intelligence and machine learning.',
      products: ['Predictive Analytics Tools', 'NLP Applications', 'Computer Vision Products', 'AI Automation Platforms'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      Icon: Database,
      title: 'Data Solutions',
      description: 'Comprehensive data management and analytics products that turn raw information into actionable business intelligence.',
      products: ['Analytics Dashboards', 'Data Visualization Tools', 'Real-time Monitoring', 'Business Intelligence Suites'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      Icon: Cloud,
      title: 'Cloud Platforms',
      description: 'Scalable cloud-native applications designed for modern distributed architectures and global accessibility.',
      products: ['Microservices Platforms', 'API Gateways', 'Serverless Applications', 'Container Orchestration'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      Icon: Zap,
      title: 'Emerging Tech Lab',
      description: 'Experimental products exploring frontier technologies like blockchain, quantum computing, and next-gen interfaces.',
      products: ['Blockchain Applications', 'IoT Ecosystems', 'Voice Interfaces', 'Quantum Algorithms'],
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const techStack = [
    { name: 'React', icon: FaReact, className: 'text-cyan-400' },
    { name: 'Node.js', icon: FaNodeJs, className: 'text-green-500' },
    { name: 'Python', icon: FaPython, className: 'text-blue-400' },
    { name: 'Flutter', icon: SiFlutter, className: 'text-blue-500' },
    { name: 'Firebase', icon: SiFirebase, className: 'text-yellow-500' },
    { name: 'Supabase', icon: SiSupabase, className: 'text-emerald-500' },
  ];

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 opacity-10 dark:opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cosmic-neon rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: Math.random() * 4,
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
          What We <span className="bg-gradient-neon bg-clip-text text-transparent">Build</span>
        </h2>
        <p className="text-lg md:text-xl text-light-subtext dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We develop our own innovative products across multiple categories, each designed to
          push boundaries and create new market opportunities.
        </p>
      </motion.div>

      <motion.div
        ref={techContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeaveContainer}
        variants={fadeInUp}
        className="glass-effect rounded-xl py-6 md:py-8 mb-12 md:mb-16 text-center"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-light-text dark:text-white mb-6">Powered By Cutting-Edge Technology</h3>
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap px-4">
          {techStack.map((tech) => (
            <TechIcon
              key={tech.name}
              tech={tech}
              mouseX={mouseX}
              mouseY={mouseY}
              containerWidth={containerSize.width}
              containerHeight={containerSize.height}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
      >
        {productCategories.map((category) => {
          const { Icon, title, description, products, gradient } = category;
          return (
            <motion.div
              key={title}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-xl p-6 md:p-8 group hover:shadow-xl dark:hover:shadow-cosmic-purple/20 transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                initial={false}
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 md:w-16 md:h-16 bg-gradient-purple rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:animate-glow"
                >
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </motion.div>

                <h3 className="text-lg md:text-xl font-semibold text-light-text dark:text-white mb-3 md:mb-4">{title}</h3>
                <p className="text-sm md:text-base text-light-subtext dark:text-gray-300 mb-4 md:mb-6 leading-relaxed">{description}</p>

                <ul className="space-y-2 mb-4 md:mb-6">
                  {products.map((product) => (
                    <li key={product} className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-cosmic-neon rounded-full mr-3"
                      />
                      <span>{product}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleExploreClick(title)}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-cosmic-purple dark:text-cosmic-neon font-medium text-sm hover:text-light-text dark:hover:text-white transition-colors group-hover:underline flex items-center"
                >
                  Explore Products
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categoryTitle={selectedCategory}
      />
    </div>
  );
};

export default Services;
