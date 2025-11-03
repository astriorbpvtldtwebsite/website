/**
 * Animation and timing constants
 * Centralized to avoid magic numbers throughout the codebase
 */

// Preloader timing
export const PRELOADER_DURATION = 2500; // ms

// Success message timing
export const SUCCESS_MESSAGE_DURATION = 3000; // ms

// Animation durations
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.0,
};

// Particle counts (optimized for performance)
export const PARTICLE_COUNT = {
  hero: 10,
  services: 8,
  projects: 10,
  mobile: 5, // Reduced count for mobile devices
};

// Framer Motion spring configs
export const SPRING_CONFIG = {
  stiff: { type: 'spring', stiffness: 500, damping: 30 },
  normal: { type: 'spring', stiffness: 100, damping: 15 },
  soft: { type: 'spring', stiffness: 50, damping: 20 },
};

// Viewport settings for scroll animations
export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.2,
};

// Email configuration
export const EMAIL_CONFIG = {
  companyName: 'AstriOrb',
  companyEmail: 'astriorbofficial@gmail.com',
};
