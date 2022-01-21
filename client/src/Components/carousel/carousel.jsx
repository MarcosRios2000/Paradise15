import React from "react";
import Img1 from '../../assets/images/3.png';
import Img2 from '../../assets/images/4.png';
import Img3 from '../../assets/images/5.png';
import ImgResponsive1 from '../../assets/images/responsiveImg1.jpg';
import ImgResponsive2 from '../../assets/images/responsiveImg2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './carousel.css';


export function Carousel() { 


  return (
    <div className='carouselComponent'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000" >
            <picture>
            <source srcSet={ImgResponsive1} media='(max-width: 360px)'/>
            <img src={Img2} className="d-block w-100 " alt='img not found' />
            </picture>
          </div>
          <div className="carousel-item" data-bs-interval="3000" style={{overflow: 'hidden'}}>
            <picture>
            <source srcSet={ImgResponsive2} media='(max-width: 360px)' />
            <img src={Img3} className="d-block w-100" alt='img not found' />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}