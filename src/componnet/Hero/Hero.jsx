import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for a better world</h1>
            <p>EduSity empowers learners with innovative and accessible education, shaping a brighter future for a better world. We bring together technology, creativity, and knowledge to make learning engaging, effective, and available to everyone.</p>
            <button className='btn'>Get Started <img src ={dark_arrow} alt=""/></button>
        </div>
    </div>
  )
}

export default Hero