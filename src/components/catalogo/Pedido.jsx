import React from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/pedido.css";
const Pedido = () => {
  return (
    <>
      <h1>Hacer pedidos perrito </h1>
      <Form className="miFormu">
        <FloatingLabel
          controlId="floatingInput"
          label="Producto"
          className="mb-3"
        >
          <Form.Control type="text" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingSelect" label="Seleccion la medida">
          <Form.Select aria-label="Floating label select example">
            <option value="1">...</option>
            <option value="2">10 ml</option>
            <option value="3">15 ml</option>
            <option value="4">30 ml</option>
          </Form.Select>
        </FloatingLabel>
        <br />

        <FloatingLabel
          controlId="floatingInput"
          label="Cantidad"
          className="mb-3"
        >
          <Form.Control type="email" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Producto"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Aceite ..." />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Producto"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Aceite ..." />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Producto"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Aceite ..." />
        </FloatingLabel>
        <div className="btnera">
          <button className="btn btn-success">Hacer pedido</button>
          <Link to="/products">
            {" "}
            <button className="btn btn-info">Back to Cat</button>
          </Link>
        </div>
      </Form>
    </>
  );
};

export default Pedido;
