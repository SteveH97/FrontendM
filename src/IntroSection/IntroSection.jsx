import React from 'react';
import './IntroSection.css'
import Navbar from './navbar/Navbar';
import HomeIntro from './Home/HomeIntro';


const IntroSection = () => {

  return (
    <div className='Intro__'>
        <Navbar/>
        <HomeIntro/>
     
    </div>
  )
}

export default IntroSection