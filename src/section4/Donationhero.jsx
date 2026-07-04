import React from "react";
import "./Donationhero.css";
import supportImg from "../assets/support.png";
import Navbar from "../section/Navbar";
import Campaign from "./Campaign";
import Impactsection from "./Impactsection";
import Beneficiary from "./Beneficiary";
import Cause from "./Cause";
import Footer from "../section/Footer";
const Donationhero = () => {
  return (
    <>
      <section className="donation-hero">
        <Navbar />
        <div className="donation-container">
          {/* Left Content */}
          <div className="donation-content">
            <div className="donation-tag">
              <span>DONATIONS PAGE</span>
            </div>

            <h1>
              Support Verified <br />
              <span>Community Needs.</span>
            </h1>

            <p>
              Every contribution reaches a verified cause.
              <br />
              Every rupee is tracked.
            </p>

            <div className="statts-container">
              <div className="stat-box">
                <h3>100%</h3>
                <span>VERIFIED</span>
              </div>

              <div className="stat-box">
                <h3 style={{ color: "#0A2463" }}>0%</h3>
                <span>PLATFORM FEE</span>
              </div>

              <div className="stat-box">
                <h3 style={{ color: "#10B981" }}>Live</h3>
                <span>UPDATES</span>
              </div>
            </div>

            <button className="donate-btn">Contribute to a Cause</button>
          </div>

          {/* Right Image */}
          <div className="image-section">
            <img src={supportImg} alt="Support" />

            {/* Floating Card */}
            <div className="urgent-card">
              <span className="urgent-label">🔴 URGENT</span>

              <h4>Emergency Medical Camp</h4>

              <div className="progress-bar">
                <div className="progress"></div>
              </div>

              <p>82% funded</p>
            </div>
          </div>
        </div>
      </section>
      <Campaign />
      <Impactsection />
      <Beneficiary />
      <Cause />
      <Footer />
    </>
  );
};

export default Donationhero;
