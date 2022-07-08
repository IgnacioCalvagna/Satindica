import React from 'react'
import mp from "../../assets/img/mp.png";
import pf from "../../assets/img/pf.png";
import rp from "../../assets/img/rp.png";
import cash from "../../assets/img/redes/cash.png";
const MediosDePago = () => {
  return (
    <>
    <h4 className="infoContacto ">Medios de pago</h4>
            <div className="seleccionPagos">
              <div className="mediopago">
                <img src={mp} width="20%" alt="" />
                <img src={rp} width="20%" alt="" />
                <img src={pf} width="20%" alt="" />
                <img src={cash} width="20%" alt="" />
                
              </div>
            </div>
    </>
  )
}

export default MediosDePago