import React from "react";
import "./Join.css";

export default function Talk() {
  return (
    <section className="join">
      <div className="join__content">
        <p className="join__eyebrow">Your impact starts here</p>
        <h2 className="join__heading">Join the Volunteer Network</h2>
        <p className="join__subtext">
          Thousands of verified volunteers are already creating change.
        </p>
        <button className="join__btn">Join the Volunteer Network</button>
      </div>
    </section>
  );
}