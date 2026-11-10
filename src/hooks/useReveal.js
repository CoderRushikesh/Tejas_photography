import { useEffect, useRef } from 'react';

export default function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        entry.target.querySelectorAll('.stagger').forEach((ch, i) => {
          setTimeout(() => ch.classList.add('in'), i * 130);
        });
      }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}
