import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import Carrousel from './Carrousel'
const Home = () => {
  return (
    <>
      
      <div className="logito container">
        <img src={logo} alt="" width="15%" />

        <p className='parrafito'><strong>Nuestra marca</strong></p>
      </div>
      <div className=" todi">
        <div className="nosviCatalogo">
        <span>para ver mas</span> <Link to='/products'> <button className='btn btn-success'>Ir al catalogo</button></Link>
        </div>
      </div>
      <div className='elCarru '>
        <Carrousel/>
      </div>
    </>
  );
};
  
export default Home;
