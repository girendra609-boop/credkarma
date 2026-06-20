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
        <img  style={{width:"416px",height:"380px"}} src={transform1} alt="" />
        <img style={{width:"416px",height:"380px"}} src={transform2} alt="" />
        <img style={{width:"416px",height:"380px"}} src={transform3} alt="" />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Transform
