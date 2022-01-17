import React from "react";
// import Img1 from '../../assets/images/1.jpg';
import Img2 from '../../assets/images/2.png';
import Img3 from '../../assets/images/3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './carousel.css';


export function Carousel(){




    return(
        <div className='carousel'>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={Img2} className="d-block w-100" alt='img not found' height='300px' width='100%'/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={Img3} className="d-block w-100" alt='img not found' height='300px' width='100%' />
    </div>
    {/* <div className="carousel-item" data-bs-interval="5000">
      <img src={Img3} className="d-block w-100" alt='img not found' height='150px' />
    </div> */}
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>
        </div>
    )
}