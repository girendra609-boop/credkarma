import React from "react";
import "./Beneficiary.css";

import beneficiary1 from "../assets/beneficiary1.png";
import beneficiary2 from "../assets/beneficiary2.png";
import beneficiary3 from "../assets/beneficiary3.png";

const Beneficiary = () => {
  return (
    <section className="beneficiary-section">
      <div className="beneficiary-container">
        {/* Heading */}
        <div className="beneficiary-header">
          <span className="beneficiary-tag">
            BENEFICIARY UPDATES
          </span>

          <h2>
            Stories from those you helped.
          </h2>
        </div>

        {/* Images Layout */}
        <div className="beneficiary-grid">
          {/* Left Large Image */}
          <div className="left-image">
            <img
              src={beneficiary1}
              alt="Beneficiary Story 1"
            />
          </div>

          {/* Right Side Images */}
          <div className="right-images">
            <div className="small-image">
              <img
                src={beneficiary2}
                alt="Beneficiary Story 2"
              />
            </div>

            <div className="small-image">
              <img
                src={beneficiary3}
                alt="Beneficiary Story 3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficiary;