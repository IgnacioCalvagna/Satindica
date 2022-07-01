import React from "react";
import logo from "../assets/img/logoVerde.png";
import "../assets/css/middlepage.css";
import { Link } from "react-router-dom";
const MiddlePage = () => {
  return (
    <>
      <div className="middlePage container">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          className="algoNuestro"
        >
          <h4>
            <i> Un poco de nosotros</i>
          </h4>
          <p className="miParrafito">
            En primer lugar, en Satindica nos preocupamos por la calidad de
            nuestros productos y eso nos hace seleccionar geneticas, el cuidado
            y alimentacion de las plantas. <br />
            Luego del corte de la planta, los cuidados continuan, hasta llegar
            al producto final <br />
            si queres leer mas sobre nuestro proceso
            <br />
           <Link  to={'whyUs'}> <button className="btn btn-success">Leer mas</button></Link>
          </p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="10"
          className="logito "
        >
          <img src={logo} alt="" width="45%" />
        </div>
        <div className="algoDescarte"></div>
      </div>
    </>
  );
};

export default MiddlePage;
