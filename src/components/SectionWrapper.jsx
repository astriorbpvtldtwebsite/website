import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = React.memo(({ children, id, className }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
});

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;
