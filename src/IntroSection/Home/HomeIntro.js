import React from 'react'
import { ClientAudiophile, ClientDatabiz, ClientMaker, ClientMeet } from '../images';
import HeroDesktop from '../images/image-hero-desktop.png';
import HeroMobile from '../images/image-hero-mobile.png';
import './HomeIntro.css';

const HomeIntro = () => {
  return (
    <div className='HomeI__'>
        {(window.screen.width > 480 ?
        <>
          <div className='HomeI__leftside'>
          <h1>
            Make <br/> remote work
          </h1>
          <h3>
            Get your team in sync, no matter your location.<br/>
            Streamline processes, create team rituals, and<br/>
            watch productivity soar. 
          </h3>
          <button>
            Learn more
          </button>
          <div className='HomeI__svg'>
            <ClientDatabiz/>
            <ClientAudiophile/>
            <ClientMeet/>
            <ClientMaker/>
          </div>
        </div>
        <img src={window.screen.width > 480 ? HeroDesktop : HeroMobile} alt="hero"/>
        </>
        :
        <div className='HomeI__mobile'>
            <img src={window.screen.width > 480 ? HeroDesktop : HeroMobile} alt="heros"/>
            <h1>
            Make remote Work
          </h1>
          <h3>
            Get your team in sync, no matter your<br/> location.
            Streamline processes, create<br/> team rituals, and
            watch productivity soar. 
          </h3>
          <button>
            Learn more
          </button>
          <div className='HomeI__svg'>
            <ClientDatabiz/>
            <ClientAudiophile/>
            <ClientMeet/>
            <ClientMaker/>
          </div>
        </div>
        )}
          
    </div>
  )
}

export default HomeIntro