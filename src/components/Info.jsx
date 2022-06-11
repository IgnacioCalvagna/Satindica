import React from "react";
import "../assets/css/info.css";


/// ICON REDES 
import ig from "../assets/img/redes/ig.png";
const Info = () => {
  return (
    <>
      <div className="container totInfo">
        <div className="basicInfo">
          <h2 className="infoContacto">Informacion contacto</h2>
          <div className="infoLine">
            <div className="infoLineTitle">
              <p> <strong> Email </strong></p> <p className="dato">s.eric.y@gmail.com</p>
            </div>
          </div>

          <div className="infoLine">
            <div className="infoLineTitle">
              <p> <strong> Telefono </strong></p> <p className="numContact">+54 9 01162119283</p>
            </div>
          </div>
         
        </div>
        <div className="red">
          <p className="misRedes">
            <strong>Redes sociales</strong>{" "}
          </p>
          <div className="iconosRedes">
            <div className="icon">

          <a href="https://www.instagram.com/satindica_tigre/" target='_blank'>  <img src={ig} width="10%" alt="" /></a>
            <img src={ig} width="10%" alt="" />
            <img src={ig} width="10%" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </>
    
  );
};

export default Info;
