import React, { useEffect, useState } from "react";
import productos from "../products.json";
import "../assets/css/catalogo.css";
import Product from "../commons/Product";
import { Link } from "react-router-dom";

/// imagenes Satindica
import algo1 from "../assets/img/productos/catalogo/1.jpeg";
import algo2 from "../assets/img/productos/catalogo/2.jpeg";
import algo3 from "../assets/img/productos/catalogo/3.jpeg";
import algo4 from "../assets/img/productos/catalogo/4.jpeg";
import algo5 from "../assets/img/productos/catalogo/5.jpeg";

/// imagenes Royal
import otro1 from "../assets/img/productos/catalogo/royal/1.jpeg";
import otro2 from "../assets/img/productos/catalogo/royal/2.jpeg";
import otro3 from "../assets/img/productos/catalogo/royal/3.jpeg";
import otro4 from "../assets/img/productos/catalogo/royal/4.jpeg";
import Ofcanvas from "./Ofcanvas";
const satindica = [algo1, algo2, algo3, algo4, algo5];
const royal = [otro1, otro2, otro3, otro4];

const Catalogo = () => {
 
  let misProductos;
 
   misProductos= productos.productos.map((p, i) => (
    <Product p={p} id={p.id} img={satindica[i]} />
  ));

  return (
    <div className="container">
      <h1>Catalogo de productos</h1>
      <div className="addBtn">
        {/* <Link to='/products/add'> <button className="btn btn-success">Agregar producto</button></Link> */}
        <Ofcanvas/>
      </div>
 
      <div className="btnLineas">
        <button className="btn btn-success">Linea Satíndica</button>
        <button className="btn btn-info">Linea Royal Queen</button>
      </div>
 
      <div className="container">
        <div className="row">{misProductos}</div>
      </div>
    </div>
  );
};

export default Catalogo;
