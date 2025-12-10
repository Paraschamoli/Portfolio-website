// hooks/usePerformance.js
import { useEffect, useCallback } from 'react';

export const usePerformance = () => {
  // Measure page load time
  useEffect(() => {
    if (performance.mark) {
      performance.mark('page-start');
      
      const measureLoadTime = () => {
        performance.mark('page-end');
        performance.measure('page-load', 'page-start', 'page-end');
        
        const measure = performance.getEntriesByName('page-load')[0];
        console.log(`Page loaded in ${measure.duration.toFixed(2)}ms`);
      };

      if (document.readyState === 'complete') {
        measureLoadTime();
      } else {
        window.addEventListener('load', measureLoadTime);
        return () => window.removeEventListener('load', measureLoadTime);
      }
    }
  }, []);

  // Debounce function for performance
  const debounce = useCallback((func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  // Throttle function for performance
  const throttle = useCallback((func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }, []);

  // Memory monitoring
  const checkMemory = useCallback(() => {
    if ('memory' in performance) {
      const { usedJSHeapSize, totalJSHeapSize } = performance.memory;
      const usedMB = (usedJSHeapSize / 1048576).toFixed(2);
      const totalMB = (totalJSHeapSize / 1048576).toFixed(2);
      console.log(`Memory: ${usedMB}MB / ${totalMB}MB`);
    }
  }, []);

  return { debounce, throttle, checkMemory };
};