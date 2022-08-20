import React, { createContext } from 'react'
import './Countries.css';
import CHome from './CHome/CHome';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md'
import { useState } from 'react';

export const ThemeContext = createContext(null);

const Countries = ({ countries }) => {

  const [theme, setTheme] = useState('dark');
  
  

  const toggleTheme = () =>{
    setTheme((curr)=>(curr === 'light' ? 'dark' : 'light'));
  }



  return (
    
    <ThemeContext.Provider value={{theme}}>
      <div className='Countries__' style={{backgroundColor: theme === 'light' ? 'hsl(0,0%,98%)' : 'hsl(207, 26%, 17%)', color: theme === 'light' ? 'black' : 'white'}}>
          <nav className='Countries__nav' style={{backgroundColor: theme === 'light' ? 'hsl(0,0%,98%)' : 'hsl(209, 23%, 22%)', color: theme === 'light' ? 'black' : 'white'}}>
              <h1>
                  Where in the World?
              </h1>
              <button onClick={toggleTheme} style={{backgroundColor: theme === 'light' ? 'hsl(0,0%,98%)' : 'hsl(209, 23%, 22%)', color: theme === 'light' ? 'black' : 'white'}}>
                {(theme === 'light'? 
                   <><MdOutlineDarkMode/> <h4>Light Mode</h4></> 
                  : 
                   <><MdDarkMode/><h4>Dark Mode</h4></>
                )}                
              </button>
          </nav>
          <CHome countries={countries}/>
      </div>
    </ThemeContext.Provider>
  )
}

export default Countries