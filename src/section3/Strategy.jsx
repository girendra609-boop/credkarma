import React from "react";
import "./Strategy.css";
import strategy from "../assets/strategy.png";
import ttk from "../assets/ttk.png";

const Strategy = () => {
  return (
    <section className="strategy-section">
      <div className="strategy-container">

        {/* Left Side */}
        <div className="strategy-image">
          <img src={strategy} alt="CSR Strategy" />
        </div>

        {/* Right Side */}
        <div className="strategy-content">
          <span className="strategy-tag">
            CSR EXECUTION METHODOLOGY
          </span>

          <h2 className="strategy-title">
            From strategy
            <br />
            to street-level impact.
          </h2>

          <p className="strategy-description">
            We don't just connect you to causes — we design, execute,
            and document your entire CSR program with precision.
          </p>

          <div className="strategy-features">
            <div className="featuree-item">
              <img src={ttk} alt="check" className="strategy-check-icon" />
              <span>CSR execution support</span>
            </div>

            <div className="featuree-item">
              <img src={ttk} alt="check" className="strategy-check-icon" />
              <span>SDG mapping</span>
            </div>

            <div className="featuree-item">
              <img src={ttk} alt="check" className="strategy-check-icon" />
              <span>Employee volunteering</span>
            </div>

            <div className="featuree-item">
              <img src={ttk} alt="check" className="strategy-check-icon" />
              <span>Impact funding</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Strategy;