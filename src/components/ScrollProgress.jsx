import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#EA9216] to-[#FF6E42] shadow-[0_0_10px_#EA9216] dark:shadow-[0_0_12px_rgba(234,146,22,0.6)] origin-left z-[9999]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
