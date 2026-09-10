import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(234, 146, 22, 0.12)',
  borderColor = 'rgba(234, 146, 22, 0.35)',
  withCorners = false,
  onClick,
  ...props
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl dark:bg-titanium-900/90 bg-white/95 dark:border-white/[0.08] border-sand-border shadow-sm dark:shadow-none transition-all duration-300 ${
        isHovered ? 'dark:shadow-2xl dark:shadow-black/80 shadow-xl shadow-sand-charcoal/10' : ''
      } ${withCorners ? 'tech-corner' : ''} ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), ${spotlightColor}, transparent 70%)`,
        }}
      />

      {/* Dynamic Border Glow Layer */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          boxShadow: `inset 0 0 0 1px ${borderColor}`,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default React.memo(SpotlightCard);
