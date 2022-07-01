import React, { useEffect, useState } from "react";
import misProductos from "../products.json";
import "../assets/css/catalogo.css";
import Product from "../commons/Product";
import { Link, useParams } from 'react-router-dom'
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
const fotos = [algo1, algo2, algo3, algo4, algo5,otro1, otro2, otro3, otro4];



const Catalogo = () => {

  const { linea } = useParams()

  const [productos, setProductos] = useState([]);
  
  
  useEffect(() => {
    let productitos 

    if(!linea){

      productitos =  misProductos.productos.map((p,i)=>{
        return(
           <Product key={i} p={p} img={fotos[i]} />
           )
       })
       
      }else{
        
        productitos =  misProductos.productos.productos.filter((product) => product.linea === linea)
        
        
      }
      setProductos(productitos)
    

     console.log(linea)

      
  }, [linea])
  
 
 


  return (
    <div className="container">
      <h1>Catalogo de productos</h1>
      <div className="addBtn">
        <Ofcanvas />
      </div>

      <div className="btnLineas">
        <Link to={'/products/satindica'}> <button className="btn btn-success">Linea Satíndica</button></Link> 
        <Link to={'/products/royal'}><button className="btn btn-info">Linea Royal Queen</button></Link>
      </div>

      <div className="container">
        <div className="row">{productos}</div>
      </div>
    </div>
  );
};

export default Catalogo;
