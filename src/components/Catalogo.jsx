import React, { useEffect, useState } from "react";
import fakeData from "../products.json";
import "../assets/css/catalogo.css";

import { Link, useParams } from "react-router-dom";

import Ofcanvas from "./Ofcanvas";
import Productos from "./Productos";

const Catalogo = () => {
  const { linea } = useParams();
  const [listaProductos, setListaProductos] = useState([]);


  useEffect(() => {
    
    let productos = fakeData.productos;
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2);
    }).then((resolve) => {
      if (!linea) {
        setListaProductos(resolve);



      } else {
        resolve = productos.filter(
          (product) => product.linea === linea
        );

        setListaProductos(resolve);
      }


    
    });
  }, [linea]);

  return (
    <div className="container">
      <h1>Catalogo de productos</h1>
      <div className="addBtn">
        <Ofcanvas />
      </div>

      <div className="btnLineas">
        <Link to={"/products/satindica"}>
          <button className="btn btn-success">Linea Satíndica</button>
        </Link>
        <Link to={"/products/royal"}>
          <button className="btn btn-info">Linea Royal Queen</button>
        </Link>
      </div>

      <div className="container">
        <Productos listaProductos={listaProductos} />
      </div>
    </div>
  );
};

export default Catalogo;
