import React from 'react';
import { PROCESS_STEPS } from '../data/siteData';
import useReveal from '../hooks/useReveal';
import './Process.css';

export default function Process() {
  const headRef = useReveal();
  const gridRef = useReveal(0.05);
  return (
    <section className="process" id="process">
      <div className="proc-head rv" ref={headRef}>
        <p className="sec-label center-label">How It Works</p>
        <h2 className="sec-title" style={{textAlign:'center'}}>Our Simple <em>Process</em></h2>
      </div>
      <div className="proc-steps" ref={gridRef}>
        {PROCESS_STEPS.map((s,i) => (
          <div key={s.num} className="proc-step stagger" style={{ transitionDelay:`${i*0.12}s` }}>
            <div className="proc-dot">{s.num}</div>
            <h3 className="proc-name">{s.name}</h3>
            <p className="proc-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
