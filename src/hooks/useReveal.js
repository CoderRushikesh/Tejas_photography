// import { useEffect, useRef } from 'react';

// export default function useReveal(threshold = 0.1) {
//   const ref = useRef(null);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const io = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('in');
//         entry.target.querySelectorAll('.stagger').forEach((ch, i) => {
//           setTimeout(() => ch.classList.add('in'), i * 130);
//         });
//       }
//     }, { threshold });
//     io.observe(el);
//     return () => io.disconnect();
//   }, [threshold]);
//   return ref;
// }

import { useState, useEffect } from 'react';
const read = () => (window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : '/');
export default function useRoute() {
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const f = () => setRoute(read());
    window.addEventListener('hashchange', f);
    return () => window.removeEventListener('hashchange', f);
  }, []);
  return route;
}
export const navigate = (p) => { window.location.hash = '#' + p; };