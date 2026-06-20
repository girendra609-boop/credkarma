import React from "react";
import "./Postrequirement.css";

export default function Postrequirement() {
  return (
    <section className="post-requirement">
      <div className="post-requirement__content">
        <p className="post-requirement__eyebrow">Ready to Begin?</p>
        <h2 className="post-requirement__heading">Post Your Requirement</h2>
        <p className="post-requirement__subtext">
          Join communities already transforming lives with CredKarma.
        </p>
        <button className="post-requirement__btn">Post Your Requirement</button>
      </div>
    </section>
  );
}