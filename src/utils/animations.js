export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.8 
    } 
  },
};

export const fadeInLeft = {
    hidden: { x: -50, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
}

export const fadeInRight = {
    hidden: { x: 50, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
}
