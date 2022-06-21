import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/aboutUs.css";
import aceites from "../assets/img/aceites.jpg";
import logo from "../assets/img/logoVerde.png";
const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div data-aos="zoom-out-down">
          <h1 className="title">Quienes somos</h1>
        </div>

        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="5000"
          className="caja1 container"
        >
          <div className=" totoArriba">
            <p className=" txt">
              Somos Satindica, una empresa establecida con 4 años de
              conocimientos comprobados, que se dedica a la realización de
              productos y aceites de cannabis con fines exclusivamente
              terapéuticos. Nos brindamos por completo a nuestros clientes y
              atendemos de manera personalizada cada una de sus inquietudes y
              necesidades, porque son la fuente de nuestro constante desafío y
              crecimiento.
            </p>
            <p className="txt">
              Además, nos comprometemos y responsabilizamos desde el inicio del
              proceso, seleccionando las semillas, garantizando su genética y
              poder sanativo desde su ADN. Cada una con su ficha informativa que
              garantiza los resultados según el producto. De esta forma,
              alimentamos con nutrientes orgánicos que potencian todas las
              cualidades curativas de la flor en cada planta, obteniendo así los
              mejores productos del mercado artesanal.
            </p>
          </div>

          <div
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="900"
            className="laImg txt-img "
          >
            <img src={aceites} alt="" width="90%" />
          </div>
        </div>

        <div className="todo container">
          <div className="txt laImg">
            <img src={logo} alt="" width="45%" />
          </div>

          <div className="txt">
            <div className="elbtn">
              <Link to="/contactMe">
                <button className="btn  btn-success">Contactenos</button>
              </Link>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="8000"
            >
              <p className="chivo">La mejor calidad y precio del mercado</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
