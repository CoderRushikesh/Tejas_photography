import React from 'react';
import { TICKER_ITEMS } from '../data/siteData';
import './Ticker.css';

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {items.map((item,i) => (
          <React.Fragment key={i}>
            <span className="t-item">{item}</span>
            <span className="t-dot">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
