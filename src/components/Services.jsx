import React from 'react';
import { SERVICES, waLink } from '../data/siteData';
import WhatsAppIcon from './WhatsAppIcon';
import useReveal from '../hooks/useReveal';
import './Services.css';

export default function Services() {
  const headRef = useReveal();
  const gridRef = useReveal(0.05);
  return (
    <section className="services" id="services">
      <div className="svc-head rv" ref={headRef}>
        <p className="sec-label center-label">What We Offer</p>
        <h2 className="sec-title" style={{textAlign:'center'}}>Our <em>Services</em></h2>
      </div>
      <div className="svc-grid" ref={gridRef}>
        {SERVICES.map((s, i) => (
          <div className="svc-card stagger" key={s.num} style={{ transitionDelay:`${i*0.1}s` }}>
            <div className="svc-num">{s.num}</div>
            <div className="svc-icon">{s.icon}</div>
            <h3 className="svc-name">{s.name}</h3>
            <p className="svc-desc">{s.desc}</p>
            <a href={waLink(`Hi Tejas, I am interested in ${s.name}. Please share the details and availability.`)} className="svc-link" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={15} /> Enquire on WhatsApp <span>→</span>
            </a>
            {/* <button>book date </button> */}
          </div>
        ))}
      </div>
    </section>
  );
}
