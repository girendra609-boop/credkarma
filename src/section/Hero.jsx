import React from "react";
import "./Hero.css";

// Placeholder image imports — swap these with real assets
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const Hero = () => {
  return (
    <section className="hero hero-local-container">
      {/* ── Left column ── */}
      <div className="hero__content">
        <span className="hero__eyebrow">
          <span className="hero__eyebrow-dot" />
          India's Unified Impact Ecosystem
        </span>

        <h1 className="hero__headline">
          Transforming ....
          <br />
          Community Needs
          <br />
          into{" "}
          <span className="hero__headline--accent">Measurable Impact.</span>
        </h1>

        <p className="hero__sub">
          Connecting communities, volunteers, and corporates
          <br />
          through a unified impact ecosystem.
        </p>

        <div className="hero__ctas">
          <a href="#request" className="btn btn--outline">
            <span className="btn__icon">+</span> Request Support
          </a>
          <a href="#volunteer" className="btn btn--outline">
            Become a Volunteer
          </a>
          <a href="#csr" className="btn btn--outline">
            Partner for CSR Impact
          </a>
          <a href="#cause" className="btn btn--outline">
            Support a Cause
          </a>
        </div>
      </div>

      {/* ── Right column: photo collage ── */}
      <div className="hero__gallery">
        <div className="hero__gallery-main">
          <img src={hero1} alt="Volunteers planting a sapling at a school" />
        </div>
        <div className="hero__gallery-side">
          <div className="hero__gallery-side-top">
            <img src={hero2} alt="Volunteers serving food to the community" />
          </div>
        
          <div className="hero__gallery-side-bottom">
            <img
              src={hero3}
              alt="Volunteers visiting elderly residents at a care home"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
