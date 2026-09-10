import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      // Use requestAnimationFrame for better performance
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      });
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return mousePosition;
};

const CustomCursor = React.memo(() => {
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
      x: x - 6,
      y: y - 6,
      height: 12,
      width: 12,
      backgroundColor: '#EA9216',
      boxShadow: '0 0 14px rgba(234, 146, 22, 0.85), 0 0 4px rgba(255, 110, 66, 0.9)',
      mixBlendMode: 'difference',
    },
    hover: {
      x: x - 20,
      y: y - 20,
      height: 40,
      width: 40,
      backgroundColor: '#ffffff',
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.6)',
      mixBlendMode: 'difference',
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      variants={variants}
      animate={variant}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      style={{ willChange: 'transform' }}
    />
  );
});

CustomCursor.displayName = 'CustomCursor';

export default CustomCursor;
