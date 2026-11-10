import React, { useState, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/siteData';
import useReveal from '../hooks/useReveal';
import './Gallery.css';

const TABS = [
  { key:'all',        label:'All' },
  { key:'wedding',    label:'Weddings' },
  { key:'prewedding', label:'Pre-Wedding' },
  { key:'portrait',   label:'Portraits' },
  { key:'fashion',    label:'Fashion' },
];

export default function Gallery() {
  const [active, setActive] = useState('all');
  const [lb, setLb]         = useState(null); // lightbox index
  const headRef = useReveal();

  const visible = active === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.cat === active);

  const total = visible.length;
  const closeLb = useCallback(() => setLb(null), []);
  const prev = useCallback(() => setLb(i => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setLb(i => (i + 1) % total), [total]);

  // keyboard
  React.useEffect(() => {
    const h = e => {
      if (lb === null) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [lb, closeLb, prev, next]);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-head rv" ref={headRef}>
        <p className="sec-label center-label">Portfolio</p>
        <h2 className="sec-title" style={{textAlign:'center'}}>Moments We've <em>Frozen in Time</em></h2>
        <div className="g-tabs">
          {TABS.map(t => (
            <button key={t.key} className={`g-tab${active===t.key?' active':''}`} onClick={() => setActive(t.key)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="g-grid">
        {visible.map((item, i) => (
          <div key={item.id} className="g-item" onClick={() => setLb(i)}>
            <img src={item.src} alt={item.alt} width={item.w} height={item.h} loading="lazy" />
            <div className="g-overlay"><span>View</span></div>
          </div>
        ))}
      </div>
      {lb !== null && (
        <div className="lb" onClick={closeLb}>
          <button className="lb-close" onClick={closeLb}>✕</button>
          <button className="lb-prev" onClick={e=>{e.stopPropagation();prev();}}>‹</button>
          <img src={visible[lb].src} alt={visible[lb].alt} onClick={e=>e.stopPropagation()} />
          <button className="lb-next" onClick={e=>{e.stopPropagation();next();}}>›</button>
        </div>
      )}
    </section>
  );
}
