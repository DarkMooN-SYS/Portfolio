import { useEffect, useRef } from 'react';

function useScrollAnimation(selector) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const container = containerRef.current;
    if (container) {
      const elements = container.querySelectorAll(selector);
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (container) {
        const elements = container.querySelectorAll(selector);
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, [selector]);

  return containerRef;
}

export { useScrollAnimation };
export default useScrollAnimation;
