import React from "react";
import "../assets/css/dondeEstamos.css";
const DondeEstamos = () => {
  return (
    <div className="miframe">
      <h4>Nos encontramos en zona norte (1648), Buenos Aires</h4>
      <div >
        <iframe
          width="100%"
          height="350px"
          frameBorder="0"
          scrolling="yes"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26327.99294965779!2d-58.593354714330744!3d-34.426777503446864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca5a2d0ddb9b1%3A0x2c1a974c67cba1e4!2sTigre%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1653345090378!5m2!1ses!2sar"
        >
          <a href="https://www.gps.ie/car-satnav-gps/">GPS devices</a>
        </iframe>
      </div>
    </div>
  );
};

export default DondeEstamos;
