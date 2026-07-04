import React from "react";
import "./Show.css";

import show1 from "../assets/show1.png";
import show2 from "../assets/show2.png";
import show3 from "../assets/show3.png";
import ttk from "../assets/ttk.png";


export default function Show() {
  return (
    <section className="rewards-section">
      <div className="rewards-container show-local-container">

        <p className="rewards-tag">
          REWARDS & RECOGNITION
        </p>

        <h2 className="rewards-heading">
          What you earn by showing up.
        </h2>

        <div className="rewards-benefits">
          <div className="benefit-item">
            <img src={ttk} alt="check" className="show-check-icon" />
            <span>Leadership Opportunities</span>
          </div>

          <div className="benefit-item">
            <img src={ttk} alt="check" className="show-check-icon" />
            <span>Community Recognition</span>
          </div>
        </div>

        <div className="rewards-gallery">
          <div className="gallery-card">
            <img src={show1} alt="Leadership Opportunities" />
          </div>

          <div className="gallery-card">
            <img src={show2} alt="Community Event" />
          </div>

          <div className="gallery-card">
            <img src={show3} alt="Recognition Award" />
          </div>
        </div>

      </div>
    </section>
  );
}