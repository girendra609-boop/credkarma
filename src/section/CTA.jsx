import React, { useState } from "react";
import "./CTA.css";

const CTA = () => {
  const [active, setActive] = useState("Request Support");

  const buttons = [
    "Request Support",
    "Join as Volunteer",
    "Partner as Corporate",
    "Support a Cause",
  ];

  const getBtnClass = (label) => {
    return `impact-btn ${active === label ? "impact-btn--active" : ""}`;
  };

  return (
    <section className="impact-section">
      <div className="impact-inner">
        <p className="impact-eyebrow">JOIN THE MOVEMENT</p>
        <h1 className="impact-heading">
          Be Part of India's Largest Impact Ecosystem.
        </h1>
        <div className="impact-actions">
          {buttons.map((label) => (
            <button
              key={label}
              className={getBtnClass(label)}
              onClick={() => setActive(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;