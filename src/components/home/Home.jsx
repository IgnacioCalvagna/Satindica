import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/home.css";

import Carrousel from "./Carrousel";
import CaroucelUp from "./CaroucelUp";
import MiddlePage from "./MiddlePage";


const Home = () => {
  return (
    <div className="Home">
      <div
        data-aos="zoom-out-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="carruup"
      >
        <CaroucelUp />
      </div>

      <MiddlePage />

      <p className="parrafito">
        <strong>Nuestra marca</strong>
      </p>
      <div className=" todi">
        <div className="nosviCatalogo">
          <span>para ver mas</span>
          <br />
          <Link to="/products">
            <button className="btn btn-success"> Ir al catalogo</button>
          </Link>
        </div>
      </div>
      <br />
      <div className="elCarru ">
        <Carrousel />
      </div>
    </div>
  );
};

export default Home;
