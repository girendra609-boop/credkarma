import React, { useState } from "react";  
import comm1 from "../assets/comm1.png";
import comm2 from "../assets/comm2.png";
import comm3 from "../assets/comm3.png";
import comm4 from "../assets/comm4.png";
import star from "../assets/star.png";
import arroww from "../assets/arroww.png";
import tick from "../assets/tick.png";
import plus from "../assets/plus.png"
import "./Community.css";

const valueProps = [
  { icon: <img src={star} alt="star" className="cng-value-star" />, label: "Access to Verified Volunteers" },
  { icon: <img src={star} alt="star" className="cng-value-star" />, label: "Faster Community Mobilization" },
  { icon: <img src={star} alt="star" className="cng-value-star" />, label: "Transparent Execution" },
  { icon: <img src={star} alt="star" className="cng-value-star" />, label: "Impact Visibility" },
];

const impactCards = [
  {
    id: 1,
    title: "Blood Donation Camps",
    stat: "2,400+ units collected last quarter",
    image: comm1,
    alt: "Blood donation camp volunteers",
  },
  {
    id: 2,
    title: "Medical Drives",
    stat: "Free consultations for 8,000+ families",
    image: comm2,
    alt: "Medical drive doctors",
  },
  {
    id: 3,
    title: "Rural Support",
    stat: "80+ villages reached in FY24",
    image: comm3,
    alt: "Rural community support",
  },
  {
    id: 4,
    title: "Education Initiatives",
    stat: "3,200+ students mentored",
    image: comm4,
    alt: "Education initiative students",
  },
];

const actions = [
  { label: "Post a Requirement", primary: true },
  { label: "Request Volunteers", primary: false },
  { label: "Launch a Community Initiative", primary: false },
];

export default function Community() {
  const [activeAction, setActiveAction] = useState(null);

  const getActionClass = (action) => {
    return `cng-btn ${action.primary ? "cng-btn--primary" : "cng-btn--outline"}`;
  };

  return (
    <section className="cng-section">
      <div className="cng-container community-local-container">
        {/* Left Column */}
        <div className="cng-left">
          <span className="cng-eyebrow">COMMUNITIES &amp; NGOS</span>
          <h2 className="cng-headline">
            Raise a Need.Build Real Support.
          </h2>

          <h3 className="cng-subheading">Value Proposition</h3>

          <ul className="cng-value-list">
            {valueProps.map((vp) => (
              <li key={vp.label} className="cng-value-item">
                <span className="cng-value-icon">{vp.icon}</span>
                <span className="cng-value-label">{vp.label}</span>
              </li>
            ))}
          </ul>

          <div className="cng-actions">
            {actions.map((action) => (
              <button
                key={action.label}
                className={getActionClass(action)}
                onClick={() => setActiveAction(action.label)}
              >
                {action.label}
              </button>
            ))}
          </div>

          {activeAction && (
            <p className="cng-feedback">
              Selected: <strong>{activeAction}</strong>
            </p>
          )}
        </div>

        {/* Right Column — Impact Grid */}
        <div className="cng-right">
          <div className="cng-grid">
            {impactCards.map((card) => (
              <div key={card.id} className="cng-card">
                <div className="cng-card-img-wrap">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="cng-card-img"
                  />
                  
                </div>
                <div className="cng-card-body">
                  <p className="cng-card-title">{card.title}</p>
                  <p className="cng-card-stat">{card.stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}