import React from "react";
import foto1 from "../../assets/img/carrDeArriba/foto1.jpeg";
import foto2 from "../../assets/img/carrDeArriba/tricomas.jpeg";
import foto3 from "../../assets/img/carrDeArriba/foto3.jpeg";
import { Carousel } from 'react-bootstrap'
import './carruUp.css'

const CaroucelUp = () => {


  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="img d-block w-100"
        src={foto1}
        alt="First slide"
        objetcfit="contain"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img d-block w-100"
        src={foto2}
        alt="Second slide"
        objetcfit="contain"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img d-block w-100"
        src={foto3}
        alt="Third slide"
        objetcfit="contain"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
};

export default CaroucelUp;
