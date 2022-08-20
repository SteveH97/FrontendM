import React, { useState } from 'react'
import { ArrowDown, ArrowUp, CloseMenu, Menu, Logo } from '../images';
import FeatureDropDown from '../FeatureDropDown/FeatureDropDown'
import CompanyDropDown from '../CompanyDropDown/CompanyDropDown';
import './Navbar.css';

const Navbar = () => {
    const [featuresArrow, setFeaturesArrow] = useState(false);
    const [companyArrow, setCompanyArrow] = useState(false);
    const [sideMenu, setSideMenu] = useState(false);
    


  return (
    <nav className='Intro__nav'>
        {(window.screen.width > 480 ? 
            <ul className='Intro__nav-links'>
             <Logo style={{paddingRight:'1rem'}}/>
                <li>Features<button onClick={()=>setFeaturesArrow(!featuresArrow)}>{(featuresArrow === false ? <ArrowDown/> : <ArrowUp/>)}{(featuresArrow === false ? <></>: <FeatureDropDown/>)}</button></li>
                <li>Company<button onClick={()=>setCompanyArrow(!companyArrow)}>{(companyArrow === false ? <ArrowDown/> : <ArrowUp/>)}{(companyArrow === false ? <></>: <CompanyDropDown/>)}</button></li>
                <li>Careers</li>
                <li>About</li>
            </ul>
        :
            <Logo style={{paddingLeft:'1rem'}}/>
        )}

        {(window.screen.width > 480 ?
        <div className='Intro__nav-user'>
            <button className='Intro__nav-login'>Login</button>
            <button className='Intro__nav-register'>Register</button>
        </div>
        :
        <>
            {(sideMenu ? 
                <div className='Intro__nav-sidemenu'>
                    <button 
                        className='Intro__nav-closeButton'
                        onClick={()=>setSideMenu(false)}
                    >
                        <CloseMenu/>
                    </button>
                    <ul className='Intro__nav-links'>
                        <li>Features<button onClick={()=>setFeaturesArrow(!featuresArrow)}>{(featuresArrow === false ? <ArrowDown/> : <ArrowUp/>)}</button></li>
                        {(featuresArrow === false ? <></>: <FeatureDropDown/>)}
                        <li>Company<button onClick={()=>setCompanyArrow(!companyArrow)}>{(companyArrow === false ? <ArrowDown/> : <ArrowUp/>)}</button></li>
                        {(companyArrow === false ? <></>: <CompanyDropDown/>)}
                        <li>Careers</li>
                        <li>About</li>
                    </ul>
                    <div className='Intro__nav-user' style={{paddingRight: 0}}>
                        <button className='Intro__nav-login' style={{backgroundColor: 'white', paddingRight: 0}}>Login</button>
                        <button className='Intro__nav-register' style={{backgroundColor: 'white'}}>Register</button>
                    </div>

                </div>
            :
             <button onClick={()=>setSideMenu(true)} className='Intro__nav-menuButton'>
                <Menu/>
             </button>
            )}

        </>
        
        )}
            
        </nav>
  )
}

export default Navbar