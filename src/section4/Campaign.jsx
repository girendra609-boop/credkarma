import React from "react";
import "./Campaign.css";

import campaign1 from "../assets/campaign1.png";
import campaign2 from "../assets/campaign2.png";
import campaign3 from "../assets/campaign3.png";

const campaigns = [
  {
    image: campaign1,
    category: "EMERGENCY CAMPAIGNS",
    title: "Emergency campaigns",
    funded: "82% funded",
    progress: 82,
    color: "linear-gradient(90deg, #F97316 0%, #FB923C 100%)",

  },
  {
    image: campaign2,
    category: "HEALTH SUPPORT",
    title: "Health support",
    funded: "61% funded",
    progress: 61,
    color: "linear-gradient(90deg, #2563EB 0%, #3B82F6 100%)",

  },
  {
    image: campaign3,
    category: "EDUCATION SPONSORSHIPS",
    title: "Education sponsorships",
    funded: "45% funded",
    progress: 45,
    color: "#8B5CF6",
  },
];

// const [campaigns, setCampaigns] = useState([]);

// useEffect(() => {
//   fetch("API_URL")
//     .then(res => res.json())
//     .then(data => setCampaigns(data));
// }, []);
const Campaign = () => {
  return (
    <section className="campaign-section">
      <div className="campaign-container">
        <span className="section-label">
          VERIFIED CAMPAIGNS
        </span>

        <h2 className="section-title">
          Causes that need <br />
          your support today.
        </h2>

        <div className="campaign-grid">
          {campaigns.map((item, index) => (
            <div className="campaign-card" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="campaign-image"
              />

              <div className="campaign-content">
                <span className="campaign-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${item.progress}%`,
                      background: item.color,
                    }}
                  ></div>
                </div>

                <div className="card-footer">
                  <span>{item.funded}</span>

                  <button className="donate-link">
                    Donate →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaign;