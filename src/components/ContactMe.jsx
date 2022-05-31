import React from "react";
import Form from "./Form";
import "../assets/css/contactMe.css";
import Info from "./Info";
import DondeEstamos from "./DondeEstamos";
import mp from "../assets/img/mp.png";
import pf from "../assets/img/pf.png";
import rp from "../assets/img/rp.png";
const ContactMe = () => {
  return (
    <>
      <div className="container">
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

        <div className="contact container ">
          <div className="divInfo">
            <Info />
          </div>

          <div className="divHorario  ">
            <h3 className="verde miH3">Horario de atencion</h3>

            <div className="todoHora ">
              <div className="semana ">
                <strong> Lunes a Viernes: </strong> <br /> 10 - 13hs <br /> 15 -
                20hs.
              </div>
              <div className="finde ">
                <strong>Sabados: </strong> <br /> 11 - 15hs.
              </div>
            </div>
            
          </div>

          <div className="divMedioPago">
            <h4 className="h4Medios ">Medios de pago</h4>
            <div className="seleccionPagos">
              <div className="mediopago">
                <img src={mp} width="20%" alt="" />
                <img src={rp} width="20%" alt="" />
                <img src={pf} width="20%" alt="" />
                <img src={mp} width="20%" alt="" />
                <img src={mp} width="20%" alt="" />
              </div>
            </div>
          </div>
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
