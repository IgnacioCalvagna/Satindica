import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";
import logo from "../assets/img/logoChico.png";
import navHam from "../assets/img/navHam.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
               <li className="nav-item">
                 <NavLink to="/">
                   <img src={logo} alt="" width="65%" />
                 </NavLink>
               </li>
        
               <li className="nav-item">
                <NavLink to="/">
                  <button className="btn ">Satindica</button>
                </NavLink>
              </li>
          <button
            className="navbar-toggler navTogle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <img src={navHam} width="150%" alt="" />
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/">
                  <button className="btn ">Home</button>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/aboutUs">
                  <button className="btn ">Quienes somos</button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/queHacemos">
                  <button className="btn ">Que hacemos</button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products">
                  <button className="btn ">Catalogo</button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contactMe">
                  <button className="btn ">Contactanos</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
