import React from 'react';
import './Request.css';

const Request = () => {
  return (
    <div className="request-container">
      <div className="request-content">
        <div className="request-left">
          <h4 className="request-subtitle">HOW TO RAISE REQUESTS</h4>
          <h2 className="request-title">A simple process. Serious<br/>results.</h2>
          <p className="request-description">
            Our structured request flow ensures your community gets the right support, fast.
          </p>
          
          <div className="request-steps-container">
            <div className="request-step">
              <div className="step-circle">1</div>
              <h5 className="step-title">Describe need</h5>
              <p className="step-description">Tell us what your community<br/>requires</p>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="request-step">
              <div className="step-circle">2</div>
              <h5 className="step-title">We match</h5>
              <p className="step-description">Volunteers and corporates<br/>are notified</p>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="request-step">
              <div className="step-circle">3</div>
              <h5 className="step-title">Track impact</h5>
              <p className="step-description">Real-time updates<br/>and reports</p>
            </div>
          </div>
        </div>
        
        <div className="request-right">
          <img 
            src="https://images.unsplash.com/photo-1529156069898-49953eb1f5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Community Support" 
            className="request-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default Request;
