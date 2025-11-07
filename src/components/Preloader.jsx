import { motion } from 'framer-motion';
import { LiquidMetal } from '@paper-design/shaders-react';

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
        <div className="w-40 h-40 rounded-lg overflow-hidden mb-0">
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
