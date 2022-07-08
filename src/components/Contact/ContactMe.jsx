import React from "react";
import "../../assets/css/contactMe.css";

import Info from "./Info";
import Horarios from "./Horarios";
import MediosDePago from "./MediosDePago";
import Form from "./Form";
import DondeEstamos from "./DondeEstamos";

const ContactMe = () => {
  return (
    <>
      <div className="container">
        
        <h1 className="title">Contactanos </h1>

        <div className="contact  ">
          <div className="divInfo">
            <Info />
          </div>

          <div className="divHorario  ">
            <Horarios /> 
          </div>

          <div className="divMedioPago">
            <MediosDePago /> 
          </div>
        </div>
        <div className="info">
          <p className="mip">
            Nuestros productos y en especial los aceites cannábicos tienen la
            más alta <br />
            concentración en su ADN de CBD. También, contamos con la más grande
            variedad <br />
            de cepas y combinaciones que atienen cada necesidad de manera
            personalizada. <br />
            <strong className="mip">¡No Dudes en consultarnos!</strong>
          </p>
        </div>
        <div className=" deAbajo">
          <div className=" izquierda">
            <Form />
          </div>
          <div className="derecha">
            <DondeEstamos />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
