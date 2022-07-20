import React from "react";
import "../assets/css/whyUs.css";
import logo from "../assets/img/logoVerde.png";
const PorqueNosotros = () => {
  return (
    <>
      <h2 className="title">Porque Satindica</h2>

      <div className="container">
        <p>
         
        </p>
      </div>

      <div className="padre container">

        <div className="izqui">
          <p className="misP  ">
            Somos SATINDICA, una Pymes establecida con 4 años de conocimiantos
            comprobados, Nos dedicamos de lleno a la realización de aceites de
            cannabis medicinal con fines exclusivamente Terapéuticos. Nos
            brindamos por completo a nuestros clientes y atendemos de manera
            personalizada cada una de sus inquietudes y preferencias. Ofrecemos
            y ponemos a disposición nuetra experiencia para que sepan elegir
            entre una amplia de variedades de aceites, cepas y combinaciones de
            fórmulas que mejor se adapte a sus preferencias. Nos comprometemos y
            responsabilizamos desde el Intelo del Proceso, seleccionando las
            semillas, garantizando su genética y poder sanativo desde su ADN.
            Cada una con su ficha informativa que garantizan los resultados de
            cada tipo de aceite SATINDICA. Alimentamos con nutrientes organicos
            que potencian todas las cualidades curativas de cada flor en cada
            planta. Dando como resultado el mejor aceite de cannabis del
            mercado. NOS DEBEMOS A CADA CLIENTE Y CADA UNA DE SUS EXIGENCIA SON
            NUESTRO CONSTANTE DESAFIO Y CRECIMIENTO.
          </p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="medio"
        >
          <img src={logo} width={"55%"} alt="" />
        </div>
        <div className="dere">
          <p className="misP ">
            Marca satíndica, productos terapeuticos con fines medicinales.
            Producidos con la flor del cannabis, obteniendo y conservando todos
            sus cannabinoides y sus beneficios de manera completa. Las
            variedades de aceites de Satindica se distinguen visualmente por
            colores y cada uno de ellos se hace con un tipo de planta medicinal
            especifica, de cual conocemos el banco de semilla, origen Genético,
            cepa,ratio y porcentajes de CBD y/o THC. Lo que nos permite poder
            saber cuál recomendar en cada patología o en cada caso.
            <br />
            OBJETIVO: Conocer a la persona que quiere comenzar con nuestra
            terapia natural, saber sobre su salud, actividades, necesidades,
            molestias,objetivos, entre otras cosas…. y asi poder recomendarles
            el mejor aceite a su medida.
            <br />
            BENEFICIOS: Logra equilibrar todos los sistemas del cuerpo que se
            necesitan para sobrevivir y funcionar correctamente, todo de manera
            natural, evitando y/o reduciendo el consumo de fármacos y terapias
            nosivas con efectos residuales y secundarios.
          </p>
        </div>



      </div>





    </>
  );
};

export default PorqueNosotros;
