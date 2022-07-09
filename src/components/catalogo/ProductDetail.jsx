import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../products.json";

import algo1 from "../../assets/img/productos/catalogo/1.jpeg";
import algo2 from "../../assets/img/productos/catalogo/2.jpeg";
import algo3 from "../../assets/img/productos/catalogo/3.jpeg";
import algo4 from "../../assets/img/productos/catalogo/4.jpeg";
import algo5 from "../../assets/img/productos/catalogo/5.jpeg";

/// imagenes Royal
import otro1 from "../../assets/img/productos/catalogo/royal/1.jpeg";
import otro2 from "../../assets/img/productos/catalogo/royal/2.jpeg";
import otro3 from "../../assets/img/productos/catalogo/royal/3.jpeg";
import otro4 from "../../assets/img/productos/catalogo/royal/4.jpeg";
const fotos = [algo1, algo2, algo3, algo4, algo5, otro1, otro2, otro3, otro4];

const ProductDetail = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const prod = fakeData.productos[id];
    setProducto(prod);
  }, [id]);

  console.log("Mi producto desde detail----->", producto);

  return (
    <div style={{ display: "flex" }} className="container">
      <div style={{ width: "50%", textAlign:"left" }}>
        <h1>{producto.name}</h1>
        <sub>Linea: {producto.linea} </sub>
        <br />
        <img src={fotos[producto.id]} width={"50%"} alt="" />
      </div>
      <div style={{ width: "50%"}}>
        <p>{producto.description}</p>
        <p>Precio ${producto.price}</p>

      </div>
    </div>
  );
};

export default ProductDetail;
