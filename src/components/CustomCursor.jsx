import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [variant, setVariant] = useState('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }
    
    const enterHandler = () => setVariant('hover');
    const leaveHandler = () => setVariant('default');

    document.addEventListener('cursor-enter', enterHandler);
    document.addEventListener('cursor-leave', leaveHandler);

    return () => {
      document.removeEventListener('cursor-enter', enterHandler);
      document.removeEventListener('cursor-leave', leaveHandler);
    };
  }, []);

  if (isTouchDevice) {
    return null;
  }

  const variants = {
    default: {
      x: x - 8,
      y: y - 8,
      height: 16,
      width: 16,
      backgroundColor: '#00d4aa',
      mixBlendMode: 'difference',
    },
    hover: {
      x: x - 24,
      y: y - 24,
      height: 48,
      width: 48,
      backgroundColor: '#ffffff',
      mixBlendMode: 'difference',
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      variants={variants}
      animate={variant}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;
