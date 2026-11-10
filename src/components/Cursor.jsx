import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);
  const pos  = useRef({ x: 0, y: 0 });
  const rpos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = e => { pos.current = { x: e.clientX, y: e.clientY }; };
    document.addEventListener('mousemove', onMove);

    let raf;
    const tick = () => {
      rpos.current.x += (pos.current.x - rpos.current.x) * 0.12;
      rpos.current.y += (pos.current.y - rpos.current.y) * 0.12;
      if (dot.current)  { dot.current.style.left = pos.current.x + 'px';  dot.current.style.top = pos.current.y + 'px'; }
      if (ring.current) { ring.current.style.left = rpos.current.x + 'px'; ring.current.style.top = rpos.current.y + 'px'; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const on = () => document.body.classList.add('cbig');
    const off = () => document.body.classList.remove('cbig');
    const attach = () => {
      document.querySelectorAll('a,button,.g-item,.svc-card,.pkg,.t-card,.insta-cell').forEach(el => {
        el.addEventListener('mouseenter', on);
        el.addEventListener('mouseleave', off);
      });
    };
    attach();
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, []);

  return (<><div className="c-dot" ref={dot} /><div className="c-ring" ref={ring} /></>);
}
