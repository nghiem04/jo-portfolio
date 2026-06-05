import { useEffect } from 'react';

// Replicates the original scroll fade-in: cards start faded/offset and animate
// in as they enter the viewport. Runs once after the page mounts.
export function useFadeInCards(selector = '.cs-full-card, .hcs-card') {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.08 }
    );

    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, [selector]);
}
