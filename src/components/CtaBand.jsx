import React from 'react';
import { IMAGES, waLink } from '../data/siteData';
import WhatsAppIcon from './WhatsAppIcon';
import useReveal from '../hooks/useReveal';
import './CtaBand.css';

export default function CtaBand() {
  const lRef = useReveal();
  const rRef = useReveal();
  return (
    <div className="cta-band">
      <div className="cta-img rl" ref={lRef}>
        <img src={IMAGES.ctaBand} alt="Pre-wedding couple by the lake" />
      </div>
      <div className="cta-text rr" ref={rRef}>
        <p className="sec-label">Limited Dates Available</p>
        <h2 className="sec-title white-title">Book Your <em>Date</em> Today</h2>
        <p className="sec-body muted-body">Our calendar fills up fast. Secure your date now and let us craft an unforgettable visual legacy of your most precious day.</p>
        {/* <a href=""> Check Availability  
        </a> */}
        <button className='btn'>  → Check Availability </button>


      

      </div>
    </div>
  );
}
