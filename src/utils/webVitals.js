/**
 * Web Vitals Performance Monitoring
 * Tracks Core Web Vitals for performance optimization
 */

export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch(() => {
      // Silently fail if web-vitals is not available
      console.warn('Web Vitals monitoring not available');
    });
  }
};

/**
 * Log performance metrics to console (development only)
 */
export const logWebVitals = () => {
  if (import.meta.env.DEV) {
    reportWebVitals((metric) => {
      // eslint-disable-next-line no-console
      console.log(`[Performance] ${metric.name}:`, metric.value);
    });
  }
};
