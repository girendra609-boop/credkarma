import React, { useState } from "react";
import "./Volunteer.css";
import vol1 from "../assets/vol1.png";
import vol2 from "../assets/vol2.png";
import star from "../assets/star.png";
import gps from "../assets/gps (2).png";
import arrowicon from "../assets/arrowicon.png";
import alarm from "../assets/alarm.png";
import community from "../assets/community.png";
import zzz from "../assets/zzz.png";

const categories = ["Education", "Healthcare", "Environment", "Elderly support", "Disaster response"];

const benefits = [
  { icon: star, label: "Verified Certificates" },
  { icon: alarm, label: "Impact Credits" },
  { icon: gps, label: "Career Exposure" },
  { icon: zzz, label: "Leadership Opportunities" },
  { icon: community, label: "Community Recognition" },
];

export default function Volunteer() {
  const [activeCategory, setActiveCategory] = useState(null);

  const getTagClass = (cat) => {
    return `ve-tag ${activeCategory === cat ? "ve-tag--active" : ""}`;
  };

  return (
    <div className="ve-wrapper volunteer-local-container">
      {/* Left Panel */}
      <div className="ve-left">
        <div className="ve-image-grid">
          <div className="ve-img ve-img--main">
            <img src={vol1} alt="Volunteers packing boxes" />
          </div>
          <div className="ve-img ve-img--secondary">
            <img src={vol2} alt="Volunteer certificates" />
            <div className="ve-stat-bubble">
              <span className="ve-stat-number">12,400+</span>
              <span className="ve-stat-label">ACTIVE VOLUNTEERS</span>
            </div>
          </div>
        </div>

        <div className="ve-categories">
          <h3 className="ve-section-title">Opportunity Categories</h3>
          <div className="ve-tags">
            {categories.map((cat, index) => (
              <React.Fragment key={cat}>
                <button
                  className={getTagClass(cat)}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                >
                  {cat}
                </button>
                {index !== categories.length - 1 && <span className="ve-tag-divider">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <button className="ve-cta">
          Explore Volunteering Opportunities
          <span className="ve-cta-icon-wrap">
            <img src={arrowicon} alt="arrow" className="ve-cta-icon" />
          </span>
        </button>
      </div>

      {/* Right Panel */}
      <div className="ve-right">
        <span className="ve-eyebrow">VOLUNTEER ECOSYSTEM</span>
        <h1 className="ve-headline">
          Volunteer. Earn Experience.<br />Create Impact.
        </h1>

        <div className="ve-benefits">
          <h2 className="ve-benefits-title">Benefits Coverage</h2>
          <span className="ve-key-blocks">KEY BLOCKS:</span>

          <div className="ve-grid">
            {benefits.map((b, i) => (
              <div key={i} className="ve-card">
                <img src={b.icon} alt={b.label} className="ve-card-icon" />
                <span className="ve-card-label">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
