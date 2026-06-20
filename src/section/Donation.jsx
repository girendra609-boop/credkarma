import "./Donation.css";
import donation from "../assets/donattion.png";
import star from "../assets/star.png";
import certify from "../assets/certify.png";
import zzz from "../assets/zzz.png";

const categories = [
  "Emergency campaigns",
  "Health support",
  "Education sponsorships",
  "Disaster relief",
];

const highlights = [
  { icon: star, label: "Transparency indicators" },
  { icon: certify, label: "Verified campaigns" },
  { icon: zzz, label: "Beneficiary stories" },
];

export default function Donation() {
  return (
    <section className="donation-section">
      <div className="donation-inner donation-local-container">
      {/* Left */}
      <div className="donation-left">
        <span className="donation-eyebrow">DONATION &amp; SUPPORT</span>

        <h2 className="donation-title">
          Support Verified Community <br />
          Needs.
        </h2>

        <div className="donation-category-grid">
          {categories.map((c) => (
            <div key={c} className="donation-category">
              <span className="donation-dot" aria-hidden="true" />
              <span className="donation-category-text">{c}</span>
            </div>
          ))}
        </div>

        <ul className="donation-highlights">
          {highlights.map((h) => (
            <li key={h.label} className="donation-highlight">
              <span className="donation-icon">
                <img src={h.icon} alt="" aria-hidden="true" />
              </span>
              <span className="donation-highlight-text">{h.label}</span>
            </li>
          ))}
        </ul>

        <button className="donation-btn">Support a Cause Today</button>
      </div>

      {/* Right */}
      <div className="donation-right">
        <div className="donation-image-card">
          <img src={donation} alt="Donation & support" />
        </div>
      </div>
      </div>
    </section>
  );
}

