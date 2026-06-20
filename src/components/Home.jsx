import React from "react";
import "./Home.css";
import Navbar from "../section/Navbar";
import Hero from "../section/Hero";
import Stats from "../section/Stats";
import HowItWorks from "../section/HowItWorks";
import Volunteer from "../section/Volunteer";
import Community from "../section/Community";
import CSR from "../section/CSR";
import Donation from "../section/Donation";
import Dashboard from "../section/Dashboard";
import Stories from "../section/Stories";
import Testimonial from "../section/Testimonial";
import CTA from "../section/CTA";
import Footer from "../section/Footer";

const Home = () => {
  return (
    <div className="first">
      <div className="home-bg" id="about">
        <Navbar />
        <Hero />
        <Stats />
      </div>

      <HowItWorks />

      <div id="volunteers">
        <Volunteer />
      </div>

      <div id="communities">
        <Community />
      </div>

      <CSR />

      <div id="donation">
        <Donation />
      </div>

      <div id="impact">
        <Dashboard />
        <Stories />
      </div>

      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;

