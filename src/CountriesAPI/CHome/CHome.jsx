import React,{ useState, useContext } from 'react';
import './CHome.css';
import Card from '../Cards/Card.jsx';
import {IoMdSearch} from 'react-icons/io';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import { ThemeContext } from '../Countries';
import { useEffect } from 'react';

const CHome = ({ countries }) => {

    const [filterRegion, setFilterRegion] = useState(false);
    const {theme} = useContext(ThemeContext);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(()=>{
        setFilteredCountries(countries);
    },[countries]);


    const handleRegion = (e) =>{
        const tempFilter = countries.filter(curr => curr.region === e.target.id);
        setFilteredCountries(tempFilter);
    }

    const handleInputText = (e) =>{
        setInputText(e.target.value);
    }

    const submitSearchText = (e) =>{
        e.preventDefault();
        const tempFilter = countries.filter((curr)=>{
            if(inputText === ''){
                return curr;
            }else if(curr.name.toLowerCase().includes(inputText.toLocaleLowerCase())){
                return curr;
            }
        })

        setFilteredCountries(tempFilter);
    }

  return (
    <div className='CHome__'>
            <div className='CHome__filters'>
                
                <div className='CHome__filters-search'>
                    <button style={{backgroundColor: theme === 'light' ? 'hsl(0,0%,95%)' : 'hsl(209, 23%, 22%)', color: theme === 'light' ? 'black' : 'white'}} onClick={submitSearchText}>
                        <IoMdSearch style={{width:'1.5em', height:'1.5em'}}/>
                    </button>
                    <input style={{backgroundColor: theme === 'light' ? 'hsl(0,0%,95%)' : 'hsl(209, 23%, 22%)', color: theme === 'light' ? 'black' : 'white'}} type="text" placeholder="Search for a country..." onChange={handleInputText}/>
                </div>
                

                <div className='CHome__dropdown' >
                    <button className='CHome__dropdown-button' onClick={()=>setFilterRegion(!filterRegion)} style={{backgroundColor: theme === 'light' ? 'hsl(0,0%,95%)' : 'hsl(209, 23%, 22%)', color: theme === 'light' ? 'black' : 'white'}}>
                       Filter by Region 
                       {(filterRegion === true?<BsChevronUp/>:<BsChevronDown/>)}
                    </button>
                    <div className={filterRegion === true ? 'CHome__dropdown-options' : 'CHome__dropdown-optionsF'} style={{backgroundColor: theme === 'light' ? 'hsl(0,0%,95%)' : 'hsl(209, 23%, 22%)', color: theme === 'light' ? 'black' : 'white'}}>
                        <button onClick={handleRegion} style={{backgroundColor: theme === 'light' ? 'hsl(0,0%,95%)' : 'hsl(209, 23%, 22%)', color: theme === 'light' ? 'black' : 'white'}} id='Africa'>Africa</button>
                        <button onClick={handleRegion} style={{backgroundColor: theme === 'light' ? 'hsl(0,0%,95%)' : 'hsl(209, 23%, 22%)', color: theme === 'light' ? 'black' : 'white'}} id='Americas'>America</button>
                        <button onClick={handleRegion} style={{backgroundColor: theme === 'light' ? 'hsl(0,0%,95%)' : 'hsl(209, 23%, 22%)', color: theme === 'light' ? 'black' : 'white'}} id='Asia'>Asia</button>
                        <button onClick={handleRegion} style={{backgroundColor: theme === 'light' ? 'hsl(0,0%,95%)' : 'hsl(209, 23%, 22%)', color: theme === 'light' ? 'black' : 'white'}} id='Europe'>Europe</button>
                        <button onClick={handleRegion} style={{backgroundColor: theme === 'light' ? 'hsl(0,0%,95%)' : 'hsl(209, 23%, 22%)', color: theme === 'light' ? 'black' : 'white'}} id='Oceania'>Oceania</button>
                    </div>
                    
                </div>
            </div>
            <div className='Countries__cards'>
                {
                    filteredCountries.map(country=>(
                        <Card 
                            key={country.name}
                            name = {country.name}
                            flag = {country.flags.svg}
                            population = {country.population}
                            region = {country.region}
                            capital = {country.capital}
                        />
                    ))
                }
            </div>
    </div>
  )
}

export default CHome