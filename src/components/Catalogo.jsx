import React from "react";
import aceite from "../assets/img/aceites.jpg";
import productos from "../products.json";
import "../assets/css/catalogo.css";

console.log(productos.productos);
const misProductos = productos.productos.map((p) => {
  return (
    <div key={p.id}>
      {p.id % 2 === 0 ? (
        <>
          <div>
            <div>
              <div className="columna">
                <div className="laInfo">
                  <h1>{p.name}</h1>
                  <p>{p.description}</p>
                </div>
                <div className="info2">
                  <img src={aceite} width="75%" alt="" />
                  <div className="precio">
                    <p>
                      Precio <br />${p.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div>
              <div className="columna">
                <div className="info2">
                  <img src={aceite} width="75%" alt="" />
                  <p>
                    Precio <br />${p.price}
                  </p>
                </div>
                <div className="claInfo">
                  <h1>{p.name}</h1>
                  <p>{p.description}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
});

const Catalogo = () => {
  return (
    <div className="container">
      <h1>Catalogo de productos</h1>
      <div>
        <button className="btn btn-success">Linea Satíndica</button>
        <button className="btn btn-info">Linea Royal Queen</button>
      </div>
      <div className="container">
        <div className="row">{misProductos}</div>
      </div>
    </div>
  );
};

export default Catalogo;
