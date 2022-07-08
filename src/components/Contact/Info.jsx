import React from "react";
import "../../assets/css/info.css";
import mail from '../../assets/img/mail.png'
import phone from '../../assets/img/phone.png'
/// ICON REDES 
import ig from "../../assets/img/redes/ig.png";
import fb from "../../assets/img/redes/fb.png";
const Info = () => {
  return (
    <>
      <div className="totInfo">
        <div className="basicInfo">
          <h2 className="infoContacto">Informacion contacto</h2>
          <div className="infoLine">
            <div className="infoLineTitle">
              <p> <img src={mail} width='12%' alt="" /> s.eric.y@gmail.com</p>
            </div>
          </div>

          <div className="infoLine">
            <div className="infoLineTitle">
              <p> <img src={phone} width='12%' alt="" /> +54 9 1162119283</p>
            </div>
          </div>
         
        </div>
        <div className="red">

          <p className="misRedes">
            <h3 className='infoContacto'>Redes sociales</h3>{" "}
          </p>
          <div className="iconosRedes">
            <div className="icon">

          <a href="https://www.instagram.com/satindica_tigre/" target='_blank' rel='noreferrer noopener'>  <img src={ig} width="15%" alt="" /></a>
            <img src={fb} width="14%" alt="" />
            
            </div>
            
          </div>
        </div>
      </div>
    </>
    
  );
};

export default Info;
