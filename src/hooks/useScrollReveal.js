import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  });
};
