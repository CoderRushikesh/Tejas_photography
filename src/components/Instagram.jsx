import React from 'react';
import { INSTAGRAM_IMGS } from '../data/siteData';
import useReveal from '../hooks/useReveal';
import './Instagram.css';

export default function Instagram() {
  const ref = useReveal();
  return (
    <section className="insta">
      <div className="insta-head rv" ref={ref}>
        <p className="sec-label center-label">Follow Along</p>
        <h2 className="sec-title white-title" style={{textAlign:'center'}}>Daily <em>Moments</em></h2>
        <p className="insta-handle">@tejasphotography</p>
      </div>
      <div className="insta-grid">
        {INSTAGRAM_IMGS.map((src, i) => (
          <div key={i} className="insta-cell">
            <img src={src} alt={`Tejas Photography portfolio ${i+1}`} loading="lazy" />
            <div className="insta-ov">📷</div>
          </div>
        ))}
      </div>
    </section>
  );
}
