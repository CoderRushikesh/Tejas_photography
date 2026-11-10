import React, { useState, useEffect } from 'react';
import { waLink } from '../data/siteData';
import WhatsAppIcon from './WhatsAppIcon';
import './Navbar.css';

const NAV = [
  { label:'About',        id:'about' },
  { label:'Photographer', id:'photographer' },
  { label:'Gallery',      id:'gallery' },
  { label:'Services',     id:'services' },
  { label:'Packages',     id:'packages' },
  { label:'Contact',      id:'contact' },
];

const WA_MSG = 'Hi Tejas, I would like to book a photoshoot. Please share the details.';

export default function Navbar() {
  const [stuck,  setStuck]  = useState(false);
  const [open,   setOpen]   = useState(false);

  useEffect(() => {
    const h = () => setStuck(window.scrollY > 70);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const go = (e, id) => {
    e.preventDefault(); setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });
  };

  return (
    <>
      <nav className={`nav${stuck ? ' stuck' : ''}`}>
        <a href="#home" className="nav-brand" onClick={e => go(e,'home')}>Tejas Photography</a>
        <ul className="nav-links">
          {NAV.map(l => <li key={l.id}><a href={`#${l.id}`} onClick={e => go(e, l.id)}>{l.label}</a></li>)}
        </ul>
        <a href={waLink(WA_MSG)} className="nav-book" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <WhatsAppIcon size={16} /> WhatsApp
        </a>
        <button className={`burger${open?' open':''}`} onClick={() => setOpen(v=>!v)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </nav>
      <div className={`mob-menu${open?' open':''}`}>
        {NAV.map(l => <a key={l.id} href={`#${l.id}`} onClick={e => go(e,l.id)}>{l.label}</a>)}
        <a href={waLink(WA_MSG)} className="mob-wa" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          <WhatsAppIcon size={20} /> Chat on WhatsApp
        </a>
      </div>
    </>
  );
}
