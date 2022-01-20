import React from "react";
import Img1 from '../../assets/images/3.png';
import Img2 from '../../assets/images/4.png';
import Img3 from '../../assets/images/5.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './carousel.css';


export function Carousel(){


    return(
        <div className='carousel'>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={Img2} className="d-block w-100" alt='img not found'/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={Img3} className="d-block w-100" alt='img not found'/>
    </div>
    {/* <div className="carousel-item" data-bs-interval="3000">
      <img src={Img3} className="d-block w-100" alt='img not found' height='300vh' width='100%' minWidth='60%' maxWidth='100%' />
    </div> */}
  </div>
</div>
        </div>
    )
}