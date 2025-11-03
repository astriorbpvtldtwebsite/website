import React from 'react';

/**
 * Skip to content link for keyboard navigation accessibility
 */
const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gradient-purple focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:font-medium focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
