import React from "react";
import "../assets/css/queHacemos.css";

import Acordion from "./Acordion";
const QueHacemos = () => {
  return (
    <div className="acordion">
      <div className="container">
        <h1 className="miP">Que hacemos </h1>
      </div>
      <div className="mipp">
        <p>
          <strong>Marca Satíndica</strong>
        </p>
          <Acordion/>
        <h3>Línea de productos cannábicos artesanales y orgánicos</h3>
      </div>
    </div>
  );
};

export default QueHacemos;
