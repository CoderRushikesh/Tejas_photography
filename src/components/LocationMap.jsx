import React from 'react';
import { SITE, waLink } from '../data/siteData';
import useReveal from '../hooks/useReveal';
import WhatsAppIcon from './WhatsAppIcon';
import './LocationMap.css';

/* =====================================================================
   EDIT THIS BLOCK  — everything you need to change is here
   ===================================================================== */
const OFFICE = {
  name:    'Tejas Dolas Photography',
  address: 'Sinhagad Road, Nanded Phata, Pune',
  mapQuery: 'Tejas Dolas Photography, Sinhagad Road, Nanded Phata, Pune',
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15137.762021436876!2d73.80493954999999!3d18.4636955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295b3c814d679%3A0xc0b2e0742b5c81fd!2sTejas_dolas_photography!5e0!3m2!1sen!2sin!4v1794321368409!5m2!1sen!2sin',
  reviewsUrl: 'https://www.google.com/maps?cid=13885407390684971517',
  phone: SITE.phoneDisplay,
  hours: [],
};
// Your Google rating. Leave score '' to hide it.   Example: { score: '4.9', count: 56 }
const RATING = { score: '', count: '' };

// PASTE YOUR REAL GOOGLE REVIEWS HERE (copy the reviewer name and text exactly as written).
// Leave [] and the reviews panel is hidden.
// Example:
// { name: 'Reviewer Name', rating: 5, when: '2 months ago', text: 'The exact review text...' },
const REVIEWS = [];
/* ===================================================================== */

const enc = encodeURIComponent;
const mapSrc = OFFICE.embedUrl || `https://www.google.com/maps?q=${enc(OFFICE.mapQuery)}&output=embed`;
const directionsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15137.762021436876!2d73.80493954999999!3d18.4636955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295b3c814d679%3A0xc0b2e0742b5c81fd!2sTejas_dolas_photography!5e0!3m2!1sen!2sin!4v1794321368409!5m2!1sen!2sin`;
const reviewsUrl = OFFICE.reviewsUrl || `https://www.google.com/maps/search/?api=1&query=${enc(OFFICE.mapQuery)}`;

const Stars = ({ n = 5 }) => (
  <span className="loc-stars" aria-label={`${n} out of 5 stars`}>
    {'★'.repeat(n)}<span className="loc-stars-off">{'★'.repeat(Math.max(0, 5 - n))}</span>
  </span>
);

/**
 * Office map + Google reviews.
 * <LocationMap />            -> its own full-width section (put it under <Testimonials /> in App.js)
 * <LocationMap embedded />   -> no background / outer padding, for placing INSIDE another section
 */
export default function LocationMap({ embedded = false }) {
  const headRef = useReveal();
  const gridRef = useReveal(0.05);
  const hasReviews = REVIEWS.length > 0;
  const Wrapper = embedded ? 'div' : 'section';

  return (
    <Wrapper className={`loc${embedded ? ' loc--embedded' : ''}`} id="location">
      <div className="loc-head rv" ref={headRef}>
        <p className="sec-label center-label">Visit Us</p>
        <h2 className="sec-title" style={{ textAlign: 'center' }}>Find Our <em>Studio</em></h2>
      </div>

      <div className="loc-grid rv" ref={gridRef}>
        <div className="loc-map">
          <iframe
            title="Tejas Photography office location on Google Maps"
            src={mapSrc}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="loc-side">
          <div className="loc-card">
            <p className="loc-kicker">Our Studio</p>
            <h3 className="loc-name">{OFFICE.name}</h3>
            <p className="loc-addr">📍 {OFFICE.address}</p>
            <p className="loc-addr">📞 {OFFICE.phone}</p>
            {OFFICE.hours.length > 0 && (
              <ul className="loc-hours">
                {OFFICE.hours.map(([d, t]) => <li key={d}><span>{d}</span><span>{t}</span></li>)}
              </ul>
            )}
            {/* <div className="loc-btns">
              <a className="btn-primary" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions</a>
              <a className="btn-wa" href={waLink('Hi Tejas, I would like to visit your studio. Please share the details.')}
                 target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> WhatsApp</a>
            </div> */}
          </div>

          {hasReviews && (
            <div className="loc-reviews">
              <div className="loc-rev-head">
                <span className="loc-g">Google Reviews</span>
                {RATING.score && (
                  <span className="loc-score">
                    <strong>{RATING.score}</strong> <Stars n={5} />
                    {RATING.count && <em>({RATING.count})</em>}
                  </span>
                )}
              </div>
              <div className="loc-rev-list">
                {REVIEWS.map((r, i) => (
                  <article key={i} className="loc-rev">
                    <div className="loc-rev-top">
                      <span className="loc-avatar">{r.name.trim()[0]}</span>
                      <div>
                        <div className="loc-rev-name">{r.name}</div>
                        <div className="loc-rev-meta"><Stars n={r.rating || 5} /> {r.when && <span>{r.when}</span>}</div>
                      </div>
                    </div>
                    <p className="loc-rev-text">{r.text}</p>
                  </article>
                ))}
              </div>
              <a className="loc-rev-all" href={reviewsUrl} target="_blank" rel="noopener noreferrer">
                Read all reviews on Google →
              </a>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
