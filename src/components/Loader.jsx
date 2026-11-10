import React, { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0);
  const letters = 'TEJAS PHOTOGRAPHY'.split('');

  useEffect(() => {
    let p = 0;
    const t = setInterval(() => {
      p = Math.min(p + Math.random() * 7, 100);
      setPct(Math.floor(p));
      if (p >= 100) { clearInterval(t); setTimeout(onDone, 600); }
    }, 80);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <div className="loader">
      <div className="ldr-brand">
        {letters.map((ch, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.065}s` }}>
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </div>
      <div className="ldr-sub">Capturing Timeless Moments</div>
      <div className="ldr-line" />
      <div className="ldr-pct">{pct}%</div>
    </div>
  );
}
