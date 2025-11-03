import { useCallback } from 'react';

/**
 * Custom hook for handling cursor enter/leave events
 * Reduces code duplication across components
 */
const useCursorEvents = () => {
  const handleMouseEnter = useCallback(() => {
    document.dispatchEvent(new Event('cursor-enter'));
  }, []);

  const handleMouseLeave = useCallback(() => {
    document.dispatchEvent(new Event('cursor-leave'));
  }, []);

  return { handleMouseEnter, handleMouseLeave };
};

export default useCursorEvents;
