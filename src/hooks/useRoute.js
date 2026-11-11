import { useState, useEffect } from 'react';

const read = () => (window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : '/');

export default function useRoute() {
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const f = () => setRoute(read());
    window.addEventListener('hashchange', f);
    window.addEventListener('popstate', f);
    window.addEventListener('app-navigate', f);
    return () => {
      window.removeEventListener('hashchange', f);
      window.removeEventListener('popstate', f);
      window.removeEventListener('app-navigate', f);
    };
  }, []);
  return route;
}

export const navigate = (p) => {
  window.location.hash = '#' + p;
  window.dispatchEvent(new Event('app-navigate'));
  window.scrollTo(0, 0);
};