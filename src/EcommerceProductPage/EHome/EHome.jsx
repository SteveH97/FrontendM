import React, { useState } from 'react'
import './EHome.css';
import { Pro1, Pro1thumb, Pro2, Pro2thumb, Pro3, Pro3thumb, Pro4, Pro4thumb, Plus, Minus } from '../images';

const EHome = () => {

    const [pictures, setPictures] = useState([
        {image: Pro1, thumbnail: Pro1thumb, checked: true},
        {image: Pro2, thumbnail: Pro2thumb, checked: false},
        {image: Pro3, thumbnail: Pro3thumb, checked: false},
        {image: Pro4, thumbnail: Pro4thumb, checked: false}]);
    const [picIndex, setPicIndex] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handlePic = (e) =>{

        if(e.target.name === 'Pro1'){
            setPicIndex(0);
            pictures[0].checked = true;
            pictures[1].checked = false;
            pictures[2].checked = false;
            pictures[3].checked = false;
        }

        if(e.target.name === 'Pro2'){
            setPicIndex(1);
            pictures[0].checked = false;
            pictures[1].checked = true;
            pictures[2].checked = false;
            pictures[3].checked = false;
        }

        if(e.target.name === 'Pro3'){
            setPicIndex(2);
            pictures[0].checked = false;
            pictures[1].checked = false;
            pictures[2].checked = true;
            pictures[3].checked = false;
        }

        if(e.target.name === 'Pro4'){
            setPicIndex(3);
            pictures[0].checked = false;
            pictures[1].checked = false;
            pictures[2].checked = false;
            pictures[3].checked = true;
        }
    }

    const handleMinus = () =>{
        if(quantity > 0){
            setQuantity(quantity-1);
        }else if(quantity === 0){
            setQuantity(0);
        }
    }

    const handlePrevious = () =>{
        if(picIndex === 0){
            setPicIndex(3);
        }else{
            setPicIndex(picIndex-1);
        }
    }

    const handleNext = () =>{
        if(picIndex === 3){
            setPicIndex(0);
        }else{
            setPicIndex(picIndex+1);
        }
    }


  return (
    <div className='EHome__'>
        {(
            window.innerWidth > 480 ?
        
        <div className='EHome__images'>
            <div className='EHome__images-main'>
                <img src={pictures[picIndex].image} alt='mainPic' width={'450px'} height={'450px'} style={{borderRadius:'10px'}}/>
            </div>
            <div className='EHome__images-thumbnails'>
                <button onClick={handlePic}>
                    <img src={Pro1thumb} alt='Pro1' style={{width:'100px', height:'100px', borderRadius:'10px', filter: pictures[0].checked === true ? 'opacity(50%)': '', outline: pictures[0].checked === true ? '3px solid rgba(255,125,26,1)' : 'none'}} name='Pro1'/>
                </button>
                <button onClick={handlePic}>
                    <img src={Pro2thumb} alt='Pro2' style={{width:'100px', height:'100px', borderRadius:'10px',filter: pictures[1].checked === true ? 'opacity(50%)': '', outline: pictures[1].checked === true ? '3px solid rgba(255,125,26,1)' : 'none'}} name='Pro2'/>
                </button>
                <button onClick={handlePic}>
                    <img src={Pro3thumb} alt='Pro3' style={{width:'100px', height:'100px', borderRadius:'10px',filter: pictures[2].checked === true ? 'opacity(50%)': '', outline: pictures[2].checked === true ? '3px solid rgba(255,125,26,1)' : 'none'}} name='Pro3'/>
                </button>
                <button onClick={handlePic}>
                    <img src={Pro4thumb} alt='Pro4' style={{width:'100px', height:'100px', borderRadius:'10px',filter: pictures[3].checked === true ? 'opacity(50%)': '', outline: pictures[3].checked === true ? '3px solid rgba(255,125,26,1)' : 'none'}} name='Pro4'/>
                </button>
            </div>
        </div>
        :

        <>
            <img src={pictures[picIndex].image} alt='mainPic' width={'100%'} height={'80%'} style={{paddingTop:'1rem'}}/>
            <div className='EHome__buttons-mobile'>
                <div className='EHome__previous' onClick={handlePrevious}>
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                </div>
                <div className='EHome__next' onClick={handleNext}>
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                </div>
            </div>
            
        </>
        )}

            <div className='EHome__info'>
            <h5 style={{color:'hsl(26, 100%, 55%)', marginBottom:0}}>
                SNEAKER COMPANY
            </h5>  
            <h1 style={{fontSize: window.innerWidth > 480 ? '45px':'35px', marginTop:'20px'}}>
                Fall Limited Edition {(window.innerWidth > 480 ? <br/> : <></>)} Sneakers
            </h1>
            <p style={{color:'gray', marginTop:0}}>
                These low-profile sneakers are your perfect casual wear {(window.innerWidth > 480 ? <br/> : <></>)}companion. Featuring a durable rubber outer sole, they'll {(window.innerWidth > 480 ? <br/> : <></>)}withstand everything the weather can offer.
            </p>
            {(
                window.innerWidth > 480 ? 
                <>
                <div className='EHome__info-prices'>
                <h2>$125.00</h2>
                <div className='EHome__info-discount'>50%</div>
                </div>
                <h3 style={{color:'gray', textDecoration:'line-through', marginTop:0}}>$250.00</h3>
                </>
                :
                <div className='EHome__info-pricesM'>
                    <h2>$125.00</h2>
                    <div className='EHome__info-discount'>50%</div>
                    <h3 style={{color:'gray', textDecoration:'line-through', marginTop:0}}>$250.00</h3>
                </div>    
            )}
            
            <div className='EHome__info-addcart'>
                <div className='EHome__info-quantity'>
                    <button onClick={handleMinus}><Minus/></button>
                    {quantity}
                    <button onClick={()=>setQuantity(quantity+1)}><Plus/></button>
                </div>
                <button className='EHome__info-addcartButton'>
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" style={{paddingRight:'1rem'}}><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fillRule="nonzero"/>
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>

    </div>
  )
}

export default EHome