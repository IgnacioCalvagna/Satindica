import React from "react";
import "../assets/css/queHacemos.css";
import list from "../assets/img/productos/acitsList.webp";
const QueHacemos = () => {
  return (
    <>
      <div className="container">
        <h1 className="miP">Que hacemos </h1>
      </div>
      <div className="mipp">
        <p>
          <strong>Marca Satíndica</strong>
        </p>
        <h3>Línea de productos cannábicos artesanales y orgánicos</h3>
      </div>
      <div className="container">
        <div className="accordion" id="accordionPanelsStayOpenExample">

          {/*  */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Aceites terapeuticos ( uso diario)
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="row">
                <div className="accordion-body col-12">
                  A) Aceites medicinales de cannabis primera línea: Satindica en
                  presentaciones de 10, 15 y 30 ml <br /> B) Aceite medicinales
                  de cannabis (de calidad importada) segunda línea: Royal Queen
                  Satindica S.A.
                  <br /> C) Aceites medicinales de cannabis (venta por cantidad
                  a comercios de emprendedores y vendedores autónomos): Medical
                  CBD (tercera línea)
                </div>
                <div className="laImg">
                  <button
                    type="button"
                    class="btn miBtn modal-lg "
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <img src={list} alt="" width="25%" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Nuestros aceites
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body"> <img src={list} alt="" width="100%" /></div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*  FIN ITEM 1 ACORDION  */}






          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Productos de uso tópico para los dolores del cuerpo
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                A) Crema corporal para dolores musculares y golpes <br />
                B) Crema para dolores articulares <br />
                C) Loción anestésica CLÁSICA y Loción anestésica Plus con Romero
                y Lavanda
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Crema facial y corporal
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                A) Crema PIELES SENSIBLES (Facial y corporal) para: Psoriasis,
                ulceras, rosácea, y pieles extremadamente secas
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                Cremas faciales
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div className="accordion-body">
                A) Cremas Antiage (paso del tiempo) <br />
                B) Crema antiage (corrige líneas de expresión) <br />
                C) Serum concentrado Cannábico (ácido Hialurónico y Colágeno){" "}
                <br />
                D) Crema de noche (regeneradora anti-age) <br />
                E) Crema para ACNE y marcas en la piel <br />
                F) EMULSIÓN liviana, calmante y desinflamante de PIELES
                IRRITADAS
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                Linea capilar
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div className="accordion-body">
                A)Shampoo cannábico FUERZA Y CRECIMIENTO <br />
                B)Anti caspa LIMPIEZA PROFUNDA <br />
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSix"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSix"
              >
                Linea Pet's (Mascotas)
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingSix"
            >
              <div className="accordion-body">
                A)Aceite de CBD suplemento dietario <br />
                B)Perfume combate pulgas y mosquitos <br />
                C)Bálsamo pieles lastimadas
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueHacemos;
