import React from "react";
import "./Time.css";
import timeImg from "../assets/time.png";
import staar from "../assets/staar.png";
import alaram from "../assets/alaram.png";
import human from "../assets/human.png";
import polygon from "../assets/polygon.png";

const benefits = [
  { icon: <img src={staar} alt="" />, title: "Verified Certificates" },
  { icon: <img src={alaram} alt="" />, title: "Impact Credits" },
  { icon: <img src={polygon} alt="" />, title: "Career Exposure" },
  { icon: <img src={human} alt="" />, title: "Community Recognition" },
];

export default function Time() {
  return (
    <section className="time-section">
      <div className="time-container time-local-container">
        <div className="time-image">
          <img src={timeImg} alt="Volunteer Activities" />
        </div>

        <div className="time-content">
          <p className="time-tag">WHY VOLUNTEER?</p>

          <h2>
            Give time.
            <br />
            Gain a lifetime.
          </h2>

          <p className="time-description">
            Volunteering is more than a weekend activity — it's a path to
            recognized skills, career growth, and genuine community belonging.
          </p>

          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <div className="benefit-card" key={index}>
                <div className={`benefit-icon icon-${index + 1}`}>
                  {item.icon}
                </div>
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}