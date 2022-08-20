import React from 'react'
import {motion} from 'framer-motion';
import './Home.css';
import {FaReact} from 'react-icons/fa';
import {DiCss3,DiHtml5,DiJavascript1,DiVisualstudio} from 'react-icons/di'

const Home = () => {
  return (
    <div className='Home__'>
      <motion.div 
        whileInView={{opacity: [0,1,0]}}
        transition={{duration:15, repeat: Infinity }}
        >
        <FaReact className='Home__react'/>
      </motion.div> 
      <motion.div
        whileInView={{opacity: [0,1,0]}}
        transition={{duration:17, repeat: Infinity, delay:3 }}
      >
        <DiCss3 className='Home__css'/>
      </motion.div>
      <motion.div
        whileInView={{opacity: [0,1,0]}}
        transition={{duration:10, repeat: Infinity, delay:1 }}
      >
        <DiJavascript1 className='Home__js'/>
      </motion.div>
      <motion.div
        whileInView={{opacity: [0,1,0]}}
        transition={{duration:12, repeat: Infinity, delay:2 }}
      >
        <DiHtml5 className='Home__html'/>
      </motion.div>
      <motion.div
        whileInView={{opacity: [0,1,0]}}
        transition={{duration:16, repeat: Infinity, delay:4 }}
      >
        <DiVisualstudio className='Home__vs' />
      </motion.div>
      <div className='Home__summary'>
        <p>
        Welcome to my frontend mentor challenges, just click on the <span>navbox</span> to see the challenges I've been working on, the github repository link can be found below. I am still working on the mobile versions for the latest challenges and a couple other features that may be missing from the challenges. However, most if not all should be functional for the desktop version of the challenge. I will keep updating these challenges as I make progress and post new ones as well.
        All these projects were made use the React framework.
        </p>
      </div>
      <div className='Home__links'>
        <h2>These are the links to the frontend challenge pages:</h2>
        <a href='https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa' target='_blank' rel='noreferrer'>
          Product preview card component
        </a>
        <a href='https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5' target='_blank' rel='noreferrer'> Intro section with dropdown navigation</a>
        <a href='https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6' target='_blank' rel='noreferrer'>E-commerce product page</a>
        <a href='https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca' target='_blank' rel='noreferrer'>REST Countries API with color theme switcher</a>
        <a href='https://github.com/SteveH97/FrontendM' target="_blank" rel='noreferrer'>Github repository for frontend mentor challenges</a>
      </div>
    </div>
  )
}

export default Home