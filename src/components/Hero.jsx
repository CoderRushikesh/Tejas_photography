import React, { useEffect, useRef, useState } from 'react';
import { IMAGES, STATS, waLink } from '../data/siteData';
import WhatsAppIcon from './WhatsAppIcon';
import './Hero.css';

function Counter({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let c = 0; const step = target / 55;
        const t = setInterval(() => { c = Math.min(c + step, target); setVal(Math.floor(c)); if(c>=target) clearInterval(t); }, 28);
      }
    }, { threshold:.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);
  return <span ref={ref} className="stat-n">{val}{suffix}</span>;
}

export default function Hero() {
  const go = (e, id) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }); };
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-slide hero-slide1"><img src={IMAGES.hero1} alt="Couple pre-wedding shoot" /></div>
        <div className="hero-slide hero-slide2"><img src={IMAGES.hero2} alt="Bride in a purple saree" /></div>
      </div>
      <div className="hero-ov" />
      <div className="hero-ov2" />
      <div className="hero-content">
        <div className="hero-eye">
          <span className="eye-line"/>Pune · Maharashtra · Pan India
        </div>
        <h1 className="hero-h1">
          <span className="hl hl1">Capturing</span>
          <span className="hl hl2">Your Love</span>
          <span className="hl hl3">Story</span>
        </h1>
        <p className="hero-p">
          Tejas Photography — where every frame breathes emotion, every image whispers your story,
          and every moment becomes a timeless masterpiece.
        </p>
        <div className="hero-btns">
          <a href="#gallery" className="btn-primary" onClick={e=>go(e,'gallery')}>View Gallery</a>
          <a href={waLink('Hi Tejas, I would like to book a photoshoot. Please share the details.')} className="btn-wa" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={16} /> Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="hero-stats">
        {STATS.map(s => (
          <div key={s.label} className="stat-item">
            <Counter target={s.target} suffix={s.suffix} />
            <span className="stat-l">{s.label}</span>
          </div>
        ))}
      </div>
      <button className="hero-scroll" onClick={e=>go(e,'about')} aria-label="Scroll down">
        <span className="scroll-txt">Scroll</span>
        <span className="scroll-bar" />
      </button>
    </section>
  );
}
