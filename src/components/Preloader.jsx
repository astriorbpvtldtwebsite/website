import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';

const Preloader = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-light-bg dark:bg-space-900"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <AnimatedLogo size="w-40 h-40" />
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="text-3xl font-bold text-light-text dark:text-white tracking-widest"
      >
        AstriOrb
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
