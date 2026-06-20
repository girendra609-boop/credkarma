import React from "react";
import "./Group.css";

import group0 from "../assets/Group 20.png";
import group1 from "../assets/Group 21.png";
import group2 from "../assets/Group 22.png";
import group3 from "../assets/Group 23.png";
import group4 from "../assets/Group 24.png";

const opportunities = [
  {
    image: group0,
    category: "EDUCATION",
    title: "Teaching Support",
  },
  {
    image: group1,
    category: "HEALTHCARE",
    title: "Medical Camps",
  },
  {
    image: group2,
    category: "ENVIRONMENT",
    title: "Green Drives",
  },
  {
    image: group3,
    category: "ELDERLY SUPPORT",
    title: "Senior Care",
  },
  {
    image: group4,
    category: "DISASTER RESPONSE",
    title: "Emergency Aid",
  },
];

const Group = () => {
  return (
    <section className="opportunities">
      <div className="heading group-local-container">
        <span className="subtitle">OPPORTUNITIES</span>
        <h2>Find your calling.</h2>
      </div>

      <div className="top-row group-local-container">
        {opportunities.slice(0, 3).map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="overlay">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-row group-local-container">
        {opportunities.slice(3).map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="overlay">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Group;