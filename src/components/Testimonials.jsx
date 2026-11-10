import React from 'react';
import { TESTIMONIALS } from '../data/siteData';
import useReveal from '../hooks/useReveal';
import './Testimonials.css';

export default function Testimonials() {
  const headRef = useReveal();
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="testi" id="testimonials">
      <div className="testi-head rv" ref={headRef}>
        <p className="sec-label center-label">Love Notes</p>
        <h2 className="sec-title" style={{textAlign:'center'}}>What Couples <em>Say</em></h2>
      </div>
      <div className="testi-wrap">
        <div className="testi-track">
          {items.map((t,i) => (
            <div key={i} className="t-card">
              <div className="t-quote">"</div>
              <div className="t-stars">★★★★★</div>
              <p className="t-text">{t.text}</p>
              <div className="t-author">{t.author}</div>
              <div className="t-event">{t.event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
