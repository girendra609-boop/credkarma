import React from "react";
import "./Talk.css";

export default function Talk() {
  return (
    <section className="talk">
      <div className="talk__content">
        <p className="talk__eyebrow">Ready to lead?</p>
        <h2 className="talk__heading">Talk to Our CSR Team</h2>
        <p className="talk__subtext">
          Design a CSR program that delivers real, measurable outcomes.
        </p>
        <button className="talk__btn">Talk to Our CSR Team</button>
      </div>
    </section>
  );
}