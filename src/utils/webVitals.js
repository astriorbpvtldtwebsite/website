/**
 * Web Vitals Performance Monitoring
 * Tracks Core Web Vitals for performance optimization
 */

export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals')
      .then((wv) => {
        const { onCLS, onINP, onFCP, onLCP, onTTFB, getCLS, getFID, getFCP, getLCP, getTTFB } = wv;
        if (typeof onCLS === 'function') onCLS(onPerfEntry);
        else if (typeof getCLS === 'function') getCLS(onPerfEntry);

        if (typeof onINP === 'function') onINP(onPerfEntry);
        else if (typeof getFID === 'function') getFID(onPerfEntry);

        if (typeof onFCP === 'function') onFCP(onPerfEntry);
        else if (typeof getFCP === 'function') getFCP(onPerfEntry);

        if (typeof onLCP === 'function') onLCP(onPerfEntry);
        else if (typeof getLCP === 'function') getLCP(onPerfEntry);

        if (typeof onTTFB === 'function') onTTFB(onPerfEntry);
        else if (typeof getTTFB === 'function') getTTFB(onPerfEntry);
      })
      .catch(() => {
        // Silently fail if web-vitals is not available in environment
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
