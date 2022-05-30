import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";
import logo from "../assets/img/logoChico.png";
const Navbar = () => {
  return (
    <div class="nav sticky-top sticky-bottom">
      <nav
        className="navbar navbar-expand-sm navbar-expand-sm bg-light"
        id="navbarNav"
      >
        <div
          className="collapse navbar-collapse container-fluid"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <div>
              <li className="nav-item">
                <NavLink to="/">
                  {" "}
                  <img src={logo} alt="" width="65%" />
                </NavLink>
              </li>
            </div>
            <li className="nav-item ">
              <NavLink to="/">
                <button className="btn">Home</button>
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
      </nav>
        <div>
          <nav className="navbar-end">
            <button
              class="navbar-toggler btn-success"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
            </button>
            
          </nav>
        </div>
    </div>
  );
};

export default Navbar;
