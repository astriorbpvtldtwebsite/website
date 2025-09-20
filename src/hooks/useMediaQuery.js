import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    // Use resize event as a fallback for older browsers
    window.addEventListener('resize', listener);
    // Use the modern way to listen for changes
    try {
      media.addEventListener('change', listener);
    } catch (e) {
      // Fallback for older browsers
      media.addListener(listener);
    }

    return () => {
      window.removeEventListener('resize', listener);
      try {
        media.removeEventListener('change', listener);
      } catch (e) {
        media.removeListener(listener);
      }
    };
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
