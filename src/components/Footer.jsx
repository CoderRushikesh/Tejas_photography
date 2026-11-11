import React from 'react';
import { SITE, waLink } from '../data/siteData';
import WhatsAppIcon from './WhatsAppIcon';
import './Footer.css';

const LINKS = {
  Services: ['Wedding Photography','Cinematic Films','Pre-Wedding Shoots','Fashion & Model Shoots','Portrait Sessions'],
  Navigate: ['About Us','Photographer','Gallery','Packages','Testimonials','Contact'],
  Contact:  [SITE.phoneDisplay, SITE.email, SITE.location, 'Instagram', 'Facebook'],
};

export default function Footer() {
  const go = (e, id) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }); };
  const ids = { 'About Us':'about', Photographer:'photographer', Gallery:'gallery', Packages:'packages', Testimonials:'testimonials', Contact:'contact' };
  return (
    <footer>
      <div className="foot-top">
        <div className="foot-brand-col">
          <div className="foot-brand">TEJAS <span>●</span></div>
          <p className="foot-quote">"Creating timeless visual poetry from the most cherished moments of your life — one frame at a time."</p>
        </div>
        {Object.entries(LINKS).map(([col, items]) => (
          <div key={col} className="foot-col">
            <div className="foot-col-title">{col}</div>
            <ul>
              {items.map(item => (
                <li key={item}>
                  <a
                    href={ids[item] ? `#${ids[item]}` : item === SITE.phoneDisplay ? waLink() : item === SITE.email ? `mailto:${SITE.email}` : item === 'Instagram' ? SITE.instagram : item === 'Facebook' ? SITE.facebook : '#'}
                    onClick={ids[item] ? e => go(e, ids[item]) : undefined}
                    {...(item === SITE.phoneDisplay ? { target:'_blank', rel:'noopener noreferrer' } : {})}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="foot-bottom">
        <p className="foot-copy">© 2026 Tejas Photography · Photography by Tejas Dolas · Pune, India / Developed by 💯 Rushikesh Kamble</p>
        <div className="foot-socs">
          <a href={SITE.instagram} className="foot-soc" aria-label="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
          <a href={SITE.facebook}  className="foot-soc" aria-label="Facebook"  target="_blank" rel="noopener noreferrer">f</a>
          <a href={SITE.youtube}   className="foot-soc" aria-label="YouTube"   target="_blank" rel="noopener noreferrer">▶</a>
          <a href={waLink()}       className="foot-soc" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
