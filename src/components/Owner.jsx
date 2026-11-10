import React from 'react';
import { IMAGES, OWNER, waLink } from '../data/siteData';
import useReveal from '../hooks/useReveal';
import WhatsAppIcon from './WhatsAppIcon';
import './Owner.css';

export default function Owner() {
  const lRef = useReveal();
  const rRef = useReveal();
  return (
    <section className="owner" id="photographer">
      <div className="owner-photo rl" ref={lRef}>
        <div className="owner-ring">
          <img src={IMAGES.owner} alt={`${OWNER.name}, photographer`} />
        </div>
        <div className="owner-years">
          <span className="owner-years-n">{OWNER.years}</span>
          <span className="owner-years-t"><br />Behind The Lens</span>
        </div>
      </div>

      <div className="owner-text rr" ref={rRef}>
        <p className="sec-label">Meet The Photographer</p>
        <h2 className="sec-title white-title">Tejas <em>Dolas</em></h2>
        <p className="owner-role">{OWNER.role}</p>
        {OWNER.bio.map((p, i) => <p key={i} className="sec-body muted-body owner-bio">{p}</p>)}

        <p className="owner-sub">Services I Offer</p>
        <ul className="owner-chips">
          {OWNER.services.map(s => <li key={s}>{s}</li>)}
        </ul>

        <a
          className="owner-wa"
          href={waLink(`Hi ${OWNER.name}, I saw your website and would like to book a shoot.`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={18} /> Message Tejas on WhatsApp
        </a>
      </div>
    </section>
  );
}
