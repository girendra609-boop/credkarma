import React from "react";
import "./Mob.css";
import volunteerImg from "../assets/mob.png";
import { FaCheckCircle } from "react-icons/fa";

const Mob = () => {
  return (
    <section className="volunteerr-section">
      <div className="volunteerr-image">
        <img src={volunteerImg} alt="Volunteer Support" />
      </div>

      <div className="volunteer-content">
        <span className="volunteerr-tag">
          VOLUNTEER MOBILIZATION
        </span>

        <h2>
          The right people, at the right
          <br />
          time.
        </h2>

        <p>
          We mobilize skilled, verified volunteers to match every
          community need — from medical camps to education drives.
        </p>

        <ul className="volunteer-list">
          <li>
            <FaCheckCircle className="cheeck-icon" />
            Skill-based matching
          </li>

          <li>
            <FaCheckCircle className="cheeck-icon" />
            Local opportunities
          </li>

          <li>
            <FaCheckCircle className="cheeck-icon" />
            Verified participation
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Mob;