import React from "react";
import "./Corporate.css";
import Navbar from "../section/Navbar";
import corporate from "../assets/corporate.png";
import zicon from "../assets/zicon.png";
import polyicon from "../assets/polyicon.png"
import Strategy from "./Strategy";
import Reporting from "./Reporting";
import SDG from "./SDG";
import Corporatepartnerships from "./Corporatepartnerships";
import Talk from "./Talk";
import Footer from "../section/Footer"
const Corporate = () => {
  return (
    <>
      <Navbar />

      <section className="corporate-section">
        <div className="corporate-container">
          {/* Left Content */}
          <div className="corporate-content">
            <div className="corporate-badge">
              <span>•</span> CORPORATE PAGE
            </div>

            <h1 className="corporate-title">
              Turn CSR into
              <br />
              <span>Measurable</span> Impact.
            </h1>

            <p className="corporate-description">
              Every initiative tracked. Every outcome measurable.
              Every rupee accountable.
            </p>

            <div className="corporate-features">
              <div className="feature-item">
                <div className="feature-icon">
                    <img style={{width:"16px",height:"16px"}} src={polyicon} alt="" />
                </div>
                <span>CSR execution support</span>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                    <img  style={{width:"16px",height:"16px"}} src={zicon} alt="" />
                </div>
                <span>Real-time dashboards</span>
              </div>

              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Compliance-ready reports</span>
              </div>
            </div>

            <button className="corporate-btn">
              Talk to Our CSR Team
            </button>
          </div>

          {/* Right Image */}
          <div className="corporate-image">
            <img src={corporate} alt="Corporate CSR" />
          </div>
        </div>
      </section>

      <Strategy />
      <Reporting />
      <SDG />
      <Corporatepartnerships />
      <Talk />
      <Footer />
    </>
  );
};

export default Corporate;