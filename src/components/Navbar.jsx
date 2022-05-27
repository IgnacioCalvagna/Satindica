import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";
import logo from "../assets/img/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar .navbar-expand{-sm|-md|-lg|-xl|-xxl} navbar-expand-sm bg-light">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/'>
              <img src={logo} alt="" width="4%" />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/">
                <button className="btn ">Home</button>
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/aboutUs">
                <button className="btn ">Quienes somos</button>
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/queHacemos">
                <button className="btn ">Que hacemos</button>
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/products">
                <button className="btn ">Catalogo</button>
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/contactMe">
                <button className="btn ">Contactanos</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
