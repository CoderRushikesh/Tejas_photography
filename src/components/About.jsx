import React from 'react';
import { IMAGES } from '../data/siteData';
import useReveal from '../hooks/useReveal';
import './About.css';

export default function About() {
  const lRef = useReveal();
  const rRef = useReveal();
  return (
    <section className="about" id="about">
      <div className="about-img rl" ref={lRef}>
        <img src={IMAGES.about1} alt="Maharashtrian wedding couple photographed by Tejas Photography" />
        <div className="about-accent">
          <img src={IMAGES.about2} alt="Portrait by Tejas Photography" />
        </div>
      </div>
      <div className="about-text rr" ref={rRef}>
        <p className="sec-label">Our Story</p>
        <h2 className="sec-title">Where Art Meets<br /><em>Emotion</em></h2>
        <p className="sec-body">For the last 8 years, Tejas Photography has been the trusted name for couples, families, and individuals across Pune and beyond. We don't just take photographs — we sculpt memories that outlast time itself.</p>
        <p className="sec-body mt">Every wedding has its own heartbeat, every pre-wedding tells a unique tale, every portrait holds a universe of feeling. We are here to capture every single one of those universes, beautifully.</p>
        <div className="about-sig">Tejas Dolas</div>
        <div className="about-badge">
          <span className="badge-n">400+</span>
          <span className="badge-t">Weddings<br/>Documented</span>
        </div>
      </div>
    </section>
  );
}
