import React from "react";
import "./Corporatepartnerships.css";
import nav1 from "../assets/nav1.png";

const logos = Array(10).fill(nav1);

export default function CorporatePartnerships() {
  const rows = [logos.slice(0, 5), logos.slice(5, 10)];

  return (
    <section className="cp-section">
      <div className="cp-inner">
        <p className="cp-eyebrow">Corporate Partnerships</p>
        <h2 className="cp-heading">Trusted by India's leading organizations.</h2>

        <div className="cp-grid">
          {rows.map((row, ri) => (
            <div className="cp-row" key={ri}>
              {row.map((src, ci) => (
                <div className="cp-cell" key={ci}>
                  <img src={src} alt={`Partner logo ${ri * 5 + ci + 1}`} className="cp-logo" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}