import React from "react";
import foto1 from "../assets/img/carrDeArriba/foto1.jpeg";
import foto2 from "../assets/img/carrDeArriba/tricomas.jpeg";
import foto3 from "../assets/img/carrDeArriba/foto3.jpeg";
import '../assets/css/carruUp.css'
const CaroucelUp = () => {
  return (
    <div className=" totCarru container">
      <div
        id="carouselExampleControls"
        className="carousel slide fotos"
        data-bs-ride="carousel"
        infinite= "true"
       
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={foto1} width="80%"  alt="..." />
          </div>
          <div className="carousel-item">
            <img src={foto2} width={"70%"} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={foto3}width="80%"  alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CaroucelUp;
