import React from "react";
import "./Journey.css";
import journeyImg from "../assets/journey.png";

const steps = [
  {
    number: "1",
    title: "Join & Get Verified",
    description:
      "Create your profile and complete identity verification to unlock opportunities.",
  },
  {
    number: "2",
    title: "Participate in Campaigns",
    description:
      "Engage with local and national volunteering opportunities that match your skills.",
  },
  {
    number: "3",
    title: "Earn Certificates & Credits",
    description:
      "Every completed engagement generates a verified certificate and impact credits.",
  },
  {
    number: "4",
    title: "Lead. Mentor. Grow.",
    description:
      "Step into leadership roles and mentor incoming volunteers.",
  },
];

export default function Journey() {
  return (
    <section className="journey-section">
      <div className="journey-container">
        
        {/* Left Side */}
        <div className="journey-content">
          <p className="journey-tag">CAREER PATHWAYS</p>

          <h2 className="journey-heading">
            Your journey, mapped out.
          </h2>

          <div className="journey-timeline">
            {steps.map((step, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-left">
                  <div className="timeline-circle">
                    <div className="timeline-number">{step.number}</div>
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>

                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="journey-image">
          <img src={journeyImg} alt="Journey Pathway" />
        </div>

      </div>
    </section>
  );
}