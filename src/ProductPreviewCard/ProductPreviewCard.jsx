import React from 'react'
import './ProductPreviewCard.css';
import DesktopImg from './images/image-product-desktop.jpg';

const ProductPreviewCard = () => {
  const screenWidth = window.screen.width;


  return (
    <div className='Card'>
        <div className='Card__main'>
          <img src={DesktopImg} alt="desk"/>    
          <div className='Card__info'>
              <p className='Card__fontOne'>
                P E R F U M E
              </p>
              {
                ( screenWidth > 480 ? <p className='Card__fontTwo'>
                Gabrielle <br/> Essence Eau<br/> De Parfum 
              </p>: <p className='Card__fontTwo'>
                Gabrielle Essence<br/> Eau De Parfum 
              </p>)
              }
              {
                ( screenWidth > 480 ? <p className='Card__fontOne'>
                A floral, solar and voluptuous <br/> interpretation composed by<br/>
                Olivier Polge, Perfumer-Creator<br/> for the house of CHANEL.
                 </p> : <p className='Card__fontOne'>
                A floral, solar and voluptuous <br/> interpretation composed by
                Olivier<br/> Polge, Perfumer-Creator for the house of<br/> CHANEL.
              </p>)
              
              }
              
              <div className='Card__price'>
                <p className='Card__fontTwo'>$149.99</p>
                <p className='Card__oldPrice'>$169.99</p>
              </div>
              <button className='Card__button'>
              <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/></svg> Add to Cart
              </button>
          </div> 
        </div>
    </div>
  )
}

export default ProductPreviewCard