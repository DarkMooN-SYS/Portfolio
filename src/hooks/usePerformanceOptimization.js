import { useCallback, useRef } from 'react';

function usePerformanceOptimization() {
  const rafId = useRef(null);
  const scrollTimeout = useRef(null);

  const throttleScroll = useCallback((callback, delay = 16) => {
    let lastTime = 0;
    return (...args) => {
      const now = Date.now();
      if (now - lastTime >= delay) {
        lastTime = now;
        callback(...args);
      }
    };
  }, []);

  const debounce = useCallback((callback, delay = 300) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback(...args), delay);
    };
  }, []);

  const optimizeImages = useCallback((images) => {
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading is supported
      images.forEach(img => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
      });
    } else {
      // Fallback for older browsers
      const lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => lazyImageObserver.observe(img));
    }
  }, []);

  const cleanup = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
  }, []);

  return {
    throttleScroll,
    debounce,
    optimizeImages,
    cleanup
  };
}

export default usePerformanceOptimization;