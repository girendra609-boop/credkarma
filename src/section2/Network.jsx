import React from 'react';
import './Network.css';
import networkImg from '../assets/network.png';
import Navbar from '../section/Navbar';
import Time from './Time';
import Show from './Show';

import Journey from './Journey';
import Group from './Group';
import Join from './Join';
import Footer from "../section/Footer"

export default function Network() {
  return (
    <div className="network-page"> <Navbar />
      <div className="network-hero-wrapper">
       
        <section className="network-section network-local-container">
          <div className="network-left">
            <div className="network-tag">
              VOLUNTEERS PAGE
            </div>

            <h1 className="network-title">
              Volunteer. <br />
              Earn <br />
              Experience. <br />
              <span className="text-highlight">Create Impact.</span>
            </h1>

            <p className="network-description">
              Every hour you give builds a community. Every action you take builds your future.
            </p>

            <button className="network-btn">
              Join the Volunteer Network
            </button>
          </div>

          <div className="network-right">
            <div className="network-image-container">
              <img src={networkImg} alt="Volunteer Network" className="network-image" />
              
              {/* Overlay Badge - in case it's not part of the image */}
              <div className="network-badge">
                <div className="badge-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#10B981"/>
                    <path d="M7 12.5L10.5 16L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="badge-text-container">
                  <div className="badge-title">Verified Certificates</div>
                  <div className="badge-subtitle">Issued for every engagement</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Time />
        <Show />
        
        <Journey />
        <Group />
        <Join />
        <Footer />
      </div>
    </div>
  );
}
