import React from "react";
import foto1 from "../../assets/img/carrDeArriba/foto1.jpeg";
import foto2 from "../../assets/img/carrDeArriba/tricomas.jpeg";
import foto3 from "../../assets/img/carrDeArriba/foto3.jpeg";
import { Carousel } from "react-bootstrap";
import "./carruUp.css";

const CaroucelUp = () => {
  return (
    <div className='carruDeArriba'>
      <Carousel >
        <Carousel.Item>
          <img
            className="img "
            src={foto1}
            alt="First slide"
            objetcfit="contain"
            

          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img "
            src={foto2}
            alt="Second slide"
            objetcfit="contain"
            
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img "
            src={foto3}
            alt="Third slide"
            objetcfit="contain"
            
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CaroucelUp;
