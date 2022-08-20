import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ProductPreviewCard from './ProductPreviewCard/ProductPreviewCard';
import IntroSection from './IntroSection/IntroSection';
import EcommerceProductPage from './EcommerceProductPage/EcommerceProductPage';
import Countries from './CountriesAPI/Countries';
import {HiOutlineMenu} from 'react-icons/hi';
import {GrFormClose} from 'react-icons/gr';


function App() {

  const [menu, setMenu] = useState(false);
  const [countries, setCountries] = useState([]);


  useEffect(()=>{
    fetchCountries();
  },[]);
  
  const fetchCountries = async () =>{
    try{
      const response = await fetch('https://restcountries.com/v2/all');
      const call = await response.json();
      setCountries(call);
    }catch(error){
      console.log(error);
    }
  }


  const handleClick = () =>{
    menu === false ? setMenu(true) : setMenu(false);
  }

  return (
    
      <div className="App">

        {(  menu === false ?
          <div className='App__nav-close'>
            <HiOutlineMenu onClick={handleClick}/>
          </div>
          :
          <div className='App__nav-open'>
            
            <GrFormClose onClick={handleClick}/>
            
            <Link to='/'>Home</Link>
            <Link to='/productPreviewCard'>ProductPreview</Link>
            <Link to='/introSection'>IntroSection</Link>
            <Link to='/ecom-pro-page'>EcomProductPage</Link>
            <Link to='/countries'>Countries</Link>
          </div>
        )}
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productPreviewCard' element={<ProductPreviewCard/>}/>
          <Route path='/introSection' element={<IntroSection/>}/>
          <Route path='/ecom-pro-page' element={<EcommerceProductPage/>}/>
          <Route path='countries' element={<Countries countries={countries}/>}/>
        </Routes>
        
      </div>
    
    
  );
}

export default App;
