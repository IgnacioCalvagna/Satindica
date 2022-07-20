import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../products.json";
import "../../assets/css/productDetail.css";
import useInput from "../../hook/useInput";

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
  const [comentarios, setComentarios] = useState([]);

  const comentario = useInput("");

  const handleAddComent = (e) => {
    e.preventDefault();
    console.log("se mando ");
    const formu = { comentario:comentario.value };
    setComentarios([...comentarios, formu]);
  };

  useEffect(() => {
    const prod = fakeData.productos[id];
    setProducto(prod);
  }, [id]);

  const comentariosMapeados = comentarios.map((coment,i)=>{
    return(
      <article key={i}>
        <p>{coment} </p>
      </article>
    )
  } )


  return (
    <>
      <div className=" detalle ">
        <div className="left container">
          <img src={fotos[producto.id]} width={"50%"} alt="" />
        </div>

        <div className="right desc container">
          <h1>{producto.name}</h1>
          <sub>Linea: {producto.linea} </sub>
          <br />
          <p className="desc">{producto.description}</p>
          <p>Precio ${producto.price}</p>
        </div>
      </div>
      <div className="comentarios container">
        <div className="formuComent">

          <form onSubmit={handleAddComent}>
            <label htmlFor="">Dejano un comentario del producto</label>
            <br />
            <input type="text" {...comentario} />
            <br />
            <button type="submit">Enviar comentario</button>
          </form>
          
        </div>
      </div>
      <div>
        show Comments
       {comentariosMapeados}
      </div>
    </>
  );
};

export default ProductDetail;
