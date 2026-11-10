import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { waLink } from '../data/siteData';
import './WhatsAppFloat.css';

/** Round WhatsApp button fixed to the bottom-right corner of every screen. */
export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={waLink('Hi Tejas, I would like to book a photoshoot. Please share the details.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="wa-float-label">Chat on WhatsApp</span>
      <span className="wa-float-icon"><WhatsAppIcon size={30} /></span>
    </a>
  );
}
