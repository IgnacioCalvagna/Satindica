import React from 'react'
import Product from "../commons/Product";

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
const Productos = ( { listaProductos } ) => {

    console.log("Productos desde PRODUCTOS ----->",listaProductos)

    const fotos = [algo1, algo2, algo3, algo4, algo5, otro1, otro2, otro3, otro4];


    const misProductos = listaProductos.map((p,img)=>{
        return (
            <Product p={p} img={fotos[p.id]} /> 
        )
    })

  return (
      <div>
          {misProductos}
      </div>
  )
}

export default Productos