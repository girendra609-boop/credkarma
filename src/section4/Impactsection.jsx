import React from "react";
import "./Impactsection.css";
import ttk from "../assets/ttk.png";

const progressData = [
  {
    title: "Emergency campaigns",
    percent: 82,
    color: "#F97316",
  },
  {
    title: "Health support",
    percent: 61,
    color: "#2563EB",
  },
  {
    title: "Education sponsorships",
    percent: 45,
    color: "#8B5CF6",
  },
  {
    title: "Disaster relief",
    percent: 73,
    color: "#F4B400",
  },
];

const indicators = [
  "Transparency indicators",
  "Verified campaigns",
  "Beneficiary stories",
  "Disaster relief",
];

const Impactsection = () => {
  return (
    <section className="impactt-section">
      <div className="impact-container">
        {/* Left Side */}
        <div className="impact-content">
          <span className="impact-tag">
            IMPACT TRANSPARENCY
          </span>

          <h2>
            You see where <br />
            every rupee goes.
          </h2>

          <p>
            We believe trust is built through radical transparency.
            Every campaign shows real-time progress, beneficiary
            updates, and expenditure breakdowns.
          </p>

          <div className="indicator-list">
            {indicators.map((item, index) => (
              <div className="indicator-item" key={index}>
                <img src={ttk} alt="check" className="impactsection-check-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="progress-card">
          <h4>PROGRESS VISUALIZATION</h4>

          {progressData.map((item, index) => (
            <div className="progress-item" key={index}>
              <div className="progress-header">
                <span>{item.title}</span>
                <span
                  className="percent"
                  style={{ color: item.color }}
                >
                  {item.percent}%
                </span>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${item.percent}%`,
                    backgroundColor: item.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impactsection;