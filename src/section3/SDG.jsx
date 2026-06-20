import React from "react";
import "./SDG.css";
import sdg from "../assets/sdg.png";

const SDG = () => {
  return (
    <section className="sdg-section">
      <div className="sdg-container">
        
        {/* Left Content */}
        <div className="sdg-content">
          <span className="sdg-tag">SDG ALIGNMENT</span>

          <h2 className="sdg-title">
            Aligned to
            <br />
            global goals.
          </h2>

          <p className="sdg-description">
            Every CredKarma CSR program is mapped to the United Nations
            Sustainable Development Goals, giving your organization a
            global impact story.
          </p>

          <button className="sdg-btn">
            Talk to Our CSR Team
          </button>
        </div>

        {/* Right Image */}
        <div className="sdg-image">
          <img src={sdg} alt="SDG Alignment" />
        </div>

      </div>
    </section>
  );
};

export default SDG;