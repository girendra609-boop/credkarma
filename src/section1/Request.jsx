import React from "react";
import "./Request.css";
import requestImg from "../assets/request.png";

const steps = [
  {
    number: 1,
    title: "Describe need",
    description: "Tell us what your community requires",
  },
  {
    number: 2,
    title: "We match",
    description: "Volunteers and corporates are notified",
  },
  {
    number: 3,
    title: "Track impact",
    description: "Real-time updates and reports",
  },
];

export default function Request() {
  return (
    <section className="simple-process">
      <div className="simple-process__left">
        <p className="simple-process__eyebrow">How to Raise Requests</p>
        <h2 className="simple-process__heading">
          A simple process. Serious results.
        </h2>
        <p className="simple-process__subtext">
          Our structured request flow ensures your community gets the right
          support, fast.
        </p>

        <div className="simple-process__steps">
          {steps.map((step) => (
            <div className="simple-process__step" key={step.number}>
              <div className="simple-process__circle">{step.number}</div>
              <div className="simple-process__step-text">
                <p className="simple-process__step-title">{step.title}</p>
                <p className="simple-process__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="simple-process__right">
        <img
          src={requestImg}
          alt="Community members in discussion"
          className="simple-process__image"
        />
      </div>
    </section>
  );
}