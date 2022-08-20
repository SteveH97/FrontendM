import React from 'react'
import './EcommerceProductPage.css';
import ENav from './nav/ENav';
import EHome from './EHome/EHome';


const EcommerceProductPage = () => {
  return (
    <div className='Ecom__'>
        <ENav/>
        {(window.innerWidth > 480 ? <hr style={{marginTop:0}}></hr> : <></>)}
        <EHome/>
    </div>
  )
}

export default EcommerceProductPage