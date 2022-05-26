import React from "react";
import Form from "./Form";
import "../assets/css/contactMe.css";
import Info from "./Info";
import DondeEstamos from "./DondeEstamos";
import mp  from '../assets/img/mp.png'
const ContactMe = () => {
  return (
    <div className="container">
      <div className="info">
        <p className="mip">
          Nuestros productos y en especial los aceites cannábicos tienen la más
          alta <br />
          concentración en su ADN de CBD. También, contamos con la más grande
          variedad <br />
          de cepas y combinaciones que atienen cada necesidad de manera
          personalizada. <br />
          <strong className="mip">¡No Dudes en consultarnos!</strong>
        </p>
      </div>
      <div className="row contact ">
        <div className="col-6 der">
          <Info />
        </div>
        <div className="col-3">
          <div className="contact">
            <div className="izq">
              <h4>Horario de atencion</h4>
             <strong> Lunes a Viernes: </strong> <br /> 10 - 13hs 15 - 20hs.
              <br />
              <strong>Sabados: </strong>  <br /> 11 - 15hs.
            </div>
          </div>
        </div>
        <div className="col-3">
          <h4>Medios de pago</h4>
          <div className="row" >
            <div className="col-2">
              <img src={mp} width='150%' alt="" />
            </div>
            <div className="col-2">
2
            </div>
            <div className="col-2">
3
            </div>
            <div className="col-2">
4
            </div>
            <div className="col-2">
5
            </div>
            
          </div>

        </div>
      </div>

      <div className="row contact">
        <div className="col-6 izq">
          <DondeEstamos />
        </div>
        <div className="col-6 izq">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
