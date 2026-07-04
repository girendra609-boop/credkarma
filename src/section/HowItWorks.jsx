import React from "react";
import cred1 from "../assets/cred1.png";
import cred2 from "../assets/creed2.png";
import cred3 from "../assets/cred3.png";
import cred4 from "../assets/cred4.png";
import arrow from "../assets/arrow.png";
import "./HowItWorks.css";

const steps = [
  {
    number: 1,
    title: "Communities Raise Needs",
    bullets: [
      "Health camps",
      "Education support",
      "Disaster response",
      "Community development",
    ],
    img: cred1,
    imgAlt: "Community volunteers helping children",
  },
  {
    number: 2,
    title: "Volunteers Join Opportunities",
    bullets: [
      "Skill-based smart matching",
      "Local opportunities",
      "Verified participation",
    ],
    img: cred2,
    imgAlt: "Volunteers collaborating around a table",
  },
  {
    number: 3,
    title: "Corporates Enable Impact",
    bullets: [
      "CSR sponsorship",
      "Employee volunteering",
      "Impact funding",
    ],
    img: cred3,
    imgAlt: "Corporate team meeting",
  },
  {
    number: 4,
    title: "CredKarma Tracks & Validates",
    bullets: [
      "Attendance",
      "Proof of work",
      "Impact analytics",
      "Reporting",
    ],
    img: cred4,
    imgAlt: "Analytics presentation on screen",
  },
];

export default function HowItWorks() {
  return (
    <section className="hiw-section">
      <div className="hiw-inner hiw-local-container">
        <p className="hiw-eyebrow">THE PROCESS</p>

        <h2 className="hiw-heading">
          How CredKarma Works
        </h2>

        <p className="hiw-subheading">
          A unified ecosystem that connects communities,
          volunteers, and corporates to create measurable impact.
        </p>

        <div className="hiw-cards">
          {steps.map((step) => (
            <div className="hiw-card" key={step.number}>
              <div className="hiw-card-img-wrap">
                <img
                  src={step.img}
                  alt={step.imgAlt}
                  className="hiw-card-img"
                />
              </div>

              <div className="hiw-card-body">
                <div className="hiw-card-title-row">
                  <span className="hiw-badge">
                    {step.number}
                  </span>

                  <h3 className="hiw-card-title">
                    {step.title}
                  </h3>
                </div>

                <ul className="hiw-list">
                  {step.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="hiw-list-item"
                    >
                      <span className="hiw-dot"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="hiw-cta-wrap">
          <button className="hiw-cta-btn">
            Explore How the Ecosystem Works

            <span className="hiw-cta-arrow">
              <img src={arrow} alt="arrow" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
