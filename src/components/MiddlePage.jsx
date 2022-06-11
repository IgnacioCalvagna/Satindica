import React from 'react'
import logo from "../assets/img/logoVerde.png";
import '../assets/css/middlepage.css'
const MiddlePage = () => {
  return (
    <>
        <div className="middlePage container">
        <div className="algoNuestro">
          <h4><i> Un poco de nosotros</i></h4>
          <p className="miParrafito">
            En primer lugar, en Satindica nos preocupamos por la calidad de
            nuestros productos y eso nos hace seleccionar geneticas, el cuidado
            y alimentacion de las plantas. <br />
            Luego del corte de la planta, los cuidados continuan, hasta llegar
            al producto final <br />
            si queres leer mas sobre nuestro proceso
            <br />
            <button className="btn btn-success">Leer mas</button>
          </p>
        </div>
        <div className="logito ">
          <img src={logo} alt="" width="45%" />
        </div>
        <div className="algoDescarte">
          <p>algo2</p>
        </div>
      </div>
    </>
  )
}

export default MiddlePage