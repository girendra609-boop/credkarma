import React from 'react'
import "./CSR.css";
import csr from "../assets/gpt.png";

const features = [
  "CSR execution support",
  "Real-time dashboards",
  "SDG mapping",
  "Employee volunteering",
  "Compliance-ready reports",
];

export default function CSR() {
  return (
   <section className="csr-section csr-local-container">
  {/* Left: Dashboard image */}
 <div className="csr-media">
  <img
    className="csr-dashboard-img"
    src={csr}
    alt="CSR impact dashboard"
  />
</div>

  {/* Right: Content */}
  <div className="csr-content">
    <span className="csr-eyebrow">CORPORATE CSR</span>
    <h2 className="csr-title">
      Turn CSR into Measurable <br />
      Impact.
    </h2>

    <ul className="csr-list">
      {features.map((text) => (
        <li key={text} className="csr-list-item">
          <span className="csr-check" aria-hidden="true" />
          <span>{text}</span>
        </li>
      ))}
    </ul>

    <div className="csr-callout">
      Every initiative tracked. Every outcome measurable.
    </div>

    <button className="csr-btn">Schedule CSR Partnership Discussion</button>
  </div>
</section>
   
  );
}

