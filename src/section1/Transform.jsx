import React from 'react'
import transform1 from '../assets/transform1.png'
import transform2 from '../assets/transform2.png'
import transform3 from '../assets/transform3.png'
import "../section1/Transform.css"
const Transform = () => {
  return (
    <div className="transform-section">
        <div >
      <p className="transform-content">Community transformation examples</p>
      <p className="transform-content1">Where needs became change.</p>
      </div>
      <div className="transform-grid">
        <img className="transform-img" src={transform1} alt="Community transformation 1" />
        <img className="transform-img" src={transform2} alt="Community transformation 2" />
        <img className="transform-img" src={transform3} alt="Community transformation 3" />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Transform
