import React from "react";
import '../assets/css/carousel.css'

import  algo from '../assets/img/productos/aceites/1.jpeg'
import  algo5 from '../assets/img/productos/aceites/2.jpeg'
import  algo4 from '../assets/img/productos/aceites/3.jpeg'
import  algo3 from '../assets/img/productos/aceites/4.jpeg'
import  algo2 from  '../assets/img/productos/aceites/5.jpeg'
const Carrousel = () => {
  return (
    <div className="elCarru">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={algo} width='35%' className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={algo2} width='35%' className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={algo3} width='35%' className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={algo4} width='35%' className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={algo5} width='35%' className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div >
  );
};

export default Carrousel;




