import React from "react";
import "./Mob.css";
import volunteerImg from "../assets/mob.png";
import ttk from "../assets/ttk.png";

const Mob = () => {
  return (
    <section className="volunteerr-section">
      <div className="volunteerr-container">
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
              <img src={ttk} alt="check" className="cheeck-icon" />
              Skill-based matching
            </li>

            <li>
              <img src={ttk} alt="check" className="cheeck-icon" />
              Local opportunities
            </li>

            <li>
              <img src={ttk} alt="check" className="cheeck-icon" />
              Verified participation
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mob;