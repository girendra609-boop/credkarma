import React from "react";
import "./Cause.css";

export default function Talk() {
  return (
    <section className="cause">
      <div className="cause__content">
        <p className="cause__eyebrow">Make a difference</p>
        <h2 className="cause__heading">Contribute to a Cause</h2>
        <p className="cause__subtext">
          Your support reaches verified communities and creates real, measurable change.
        </p>
        <button className="cause__btn">Contribute to a Cause</button>
      </div>
    </section>
  );
}