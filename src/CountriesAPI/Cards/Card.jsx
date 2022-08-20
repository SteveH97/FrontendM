import React, { useContext } from 'react'
import { ThemeContext } from '../Countries';
import './Card.css';

const Card = ({ name, flag, population, region, capital }) => {

  const { theme } = useContext(ThemeContext);


  return (
    <div className='Card__' style={{backgroundColor: theme === 'light' ? 'hsl(0,0%,95%)' : 'hsl(209, 23%, 22%)', color: theme === 'light' ? 'black' : 'white'}}>
      <img src={flag} style={{height: '50%', objectFit: 'cover'}} alt="flag"/>
      <div>
        <h4>{name}</h4>
        <h6>Population: {population}</h6>
        <h6>Region: {region}</h6>
        <h6>Capitol: {capital}</h6>
      </div>
      
    </div>
  )
}

export default Card