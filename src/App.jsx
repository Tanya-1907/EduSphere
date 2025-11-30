import React from 'react'
import { useState } from 'react'
import Navbar from './componnet/Navbar/Navbar'
import Hero from './componnet/Hero/Hero'
import Program from './componnet/Programs/Program'
import Title from './componnet/Title/Title'
import About from './componnet/About/About'
import Campus from './componnet/Campus/Campus'
import Testimonials from './componnet/Testimonials/Testimonials'
import Contact from './componnet/Contact/Contact'
import Footer from './componnet/Footer/Footer'
import VideoPlayer from './componnet/VideoPlayer/VideoPlayer'


const App = () => {
  const[playState, setPlayState] =useState(false);


 


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'> 
        <Title subTitle='Our PROGRAM'title='What We Offer'/>
        <Program/>
        <About setPlayState = {setPlayState}/>
        <Title subTitle='Gallery'title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get In Touch' />
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App