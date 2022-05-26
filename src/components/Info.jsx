import React from "react";
import '../assets/css/info.css'
const Info = () => {
  return (
    <>
      <div className="container totInfo">
          <h2>Contacto</h2>
          <div>
                <p><strong>Email</strong></p>
                <p>s.eric.y@gmail.com</p>
                <p><strong>Telefono</strong></p>
                <p>+54 9 01162119283</p>
          </div>
          <div className="row">
              <p><strong>Redes sociales</strong> </p>
            <div className="col-3">
                red1
            </div>
            <div className="col-3">
                red2
            </div>
            <div className="col-3">
                red3
            </div>
            
          </div>
      </div>
    </>
  );
};

export default Info;
