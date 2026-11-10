import React from 'react';
import { PACKAGES, waLink } from '../data/siteData';
import WhatsAppIcon from './WhatsAppIcon';
import useReveal from '../hooks/useReveal';
import './Packages.css';

export default function Packages() {
  const headRef = useReveal();
  const gridRef = useReveal(0.05);
  return (
    <section className="pkgs" id="packages">
      <div className="pkg-head rv" ref={headRef}>
        <p className="sec-label center-label">Pricing</p>
        <h2 className="sec-title white-title" style={{textAlign:'center'}}>Our <em>Packages</em></h2>
      </div>
      <div className="pkg-grid" ref={gridRef}>
        {PACKAGES.map((p, i) => (
          <div key={p.name} className={`pkg stagger${p.featured?' pkg-feat':''}`} style={{ transitionDelay:`${i*0.12}s` }}>
            {p.featured && <div className="pkg-badge">Most Popular</div>}
            <div className="pkg-name">{p.name}</div>
            <div className="pkg-tag">{p.tagline}</div>
            <div className="pkg-price">
              <span className="pkg-cur">₹</span>
              <span className="pkg-num">{p.price}</span>
              <span className="pkg-per">/onwards</span>
            </div>
            <ul className="pkg-feats">
              {p.features.map(f => <li key={f}><span>✓</span>{f}</li>)}
            </ul>
            <a href={waLink(`Hi Tejas, I am interested in the ${p.name} package (from ₹${p.price}). Please share the details.`)} className={`pkg-btn${p.featured?' pkg-btn-feat':''}`} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={15} /> Get This Package
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
