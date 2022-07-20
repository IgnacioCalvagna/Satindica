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

        <div className="nosotros">
          <div className="nosotros_text">
            <p className="txt">
              Somos Satindica, una empresa establecida con 4 años de
              conocimientos comprobados, nos dedicamos a la realización de
              productos cannabicos con fines exclusivamente terapéuticos. Nos
              brindamos por completo a nuestros clientes y atendemos de manera
              personalizada cada una de sus inquietudes y necesidades, porque
              son la fuente de nuestro constante desafío y crecimiento.
            </p>
            <p className="txt">
              Nos brindamos por completo a nuestros clientes y atendemos de
              manera personalizada cada una de sus inquietudes y preferencias.
              Ofrecemos y ponemos a disposición nuetra experiencia para que
              sepan elegir entre una amplia de variedades de aceites, cepas y
              combinaciones de fórmulas que mejor se adapte a sus preferencias.
            </p>
          </div>

          <div
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="900"
            className="aceites"
          >
            <img src={aceites} alt="" width="90%" />
          </div>
        </div>

        <hr />
        <div className="nosotros">
          <div
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="900"
            className="aceites"
          >
            <img src={aceites} alt="" width="90%" />
          </div>

          <div className="nosotros_text">
            <p className="txt">
              En primer lugar, nos preocupamos por la calidad de nuestros
              productos y eso nos hace ir al início de vida de la planta. la
              selección de semillas de buena calidad, las genéticas ,el cuidado
              y alimentación de las plantas. 
            </p>
            <p className="txt">
              Alimentamos con nutrientes organicos que potencian todas las
              cualidades curativas de cada flor en cada planta. Dando como
              resultado el mejor aceite de cannabis del mercado.
              <br />
              Luego del corte de la planta, los
              cuidados continuan, hasta llegar al producto final
            </p>
          </div>
        </div>
        <hr />
        <div className="nosotrosDown">
          <div className="nosotrosDownRight">
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
              <h3 className="chivo">La mejor calidad y precio del mercado</h3>
            </div>
          </div>

          <div className="laImg">
            <img src={logo} alt="" width="45%" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
