import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="about_img" className='about-img' />
            <img src={play_icon} alt="play_icon" className='play-icon' onClick={()=>{setPlayState(true)}} />
        </div>
        
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p> 
                university is committed to academic excellence, innovation, and holistic development. 
                With a legacy of shaping bright minds, we provide students with the knowledge, skills, and 
                values neededOur to thrive in a rapidly changing world.
            </p>
            <p>
                We offer a wide range of programs across diverse disciplines, supported by experienced faculty 
                and state-of-the-art facilities. Our curriculum blends theory with practical exposure, 
                ensuring students are ready to face real-world challenges with confidence and creativity.
            </p>
            <p>
                Beyond academics, we emphasize leadership, community engagement, and personal growth. 
                From cultural events to research opportunities, every student is encouraged to explore their 
                passions and contribute meaningfully to society. Together, we nurture tomorrow’s leaders today.
            </p>
        </div>

    </div>
  )
}

export default About