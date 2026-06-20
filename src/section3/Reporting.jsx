import React from "react";
import "./Reporting.css";

const Reporting = () => {
  const stats = [
    { value: "₹2.4Cr", label: "CSR INVESTED" },
    { value: "1,240", label: "EMPLOYEES VOLUNTEERED" },
    { value: "94%", label: "SDG ALIGNMENT" },
    { value: "12", label: "ACTIVE SDGS" },
  ];


const sdgs = [
  { title: "SDG 1", gradient: "linear-gradient(135deg, #E5243B, #C01F30)" },
  { title: "SDG 2", gradient: "linear-gradient(135deg, #DDA63A, #C4942F)" },
  { title: "SDG 3", gradient: "linear-gradient(135deg, #4C9F38, #3D8A2B)" },
  { title: "SDG 4", gradient: "linear-gradient(135deg, #C5192D, #A8142A)" },
  { title: "SDG 5", gradient: "linear-gradient(135deg, #FF3A21, #D9301B)" },
  { title: "SDG 6", gradient: "linear-gradient(135deg, #26BDE2, #1FA5C8)" },
  { title: "SDG 7", gradient: "linear-gradient(135deg, #FCC30B, #D9A809)" },
  { title: "SDG 8", gradient: "linear-gradient(135deg, #A21942, #8A1538)" },
];
  return (
    <section className="reporting-section">
      <div className="reporting-header">
        <span className="reporting-tag">
          REPORTING STRUCTURE
        </span>

        <h2 className="reporting-title">
          Every metric. Every outcome.
          <br />
          One dashboard.
        </h2>
      </div>

      <div className="dashboardd-container">
        {/* Dashboard Header */}
        <div className="dashboard-topbar">
          <div className="dashboard-left">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>

            <span>CredKarma CSR Reporting Dashboard</span>
          </div>

          <div className="dashboard-right">
            Q3 2024 — Live
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="staat-card" key={index}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Graph */}
          <div className="graph-card">
            <div className="graph-bars">
              <div className="barr h1"></div>
              <div className="barr h2"></div>
              <div className="barr h3"></div>
              <div className="barr h4"></div>
              <div className="barr h5"></div>
              <div className="barr h6"></div>
              <div className="barr h7"></div>
            </div>
          </div>

          {/* SDG Section */}
          <div className="sdg-card">
            <h4>SDG CONTRIBUTION</h4>

            <div className="sdg-grid">
              {sdgs.map((item, index) => (
                <div
                  key={index}
                  className="sdg-box"
                  style={{ background: item.gradient  }}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reporting;