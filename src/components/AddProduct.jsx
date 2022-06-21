import React from "react";
import { Form, FloatingLabel,Button } from "react-bootstrap";
import "../assets/css/addProducto.css";
const AddProduct = () => {
  return (
    <>
      <div>
        <h1>Agregar producto</h1>
      </div>
      <br />
      <Form className="miForm">
        <FloatingLabel
          controlId="floatingInput"
          label="Producto"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Aceite ..." />
        </FloatingLabel>


        <FloatingLabel
          controlId="floatingInput"
          label="Seleccione Linea"
          className="mb-3"
        >
        <Form.Select aria-label="Default select example">
        <option value="1">...</option>
          <option value="2">Satindica</option>
          <option value="3">Royal Queen</option>
          
        </Form.Select>
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextarea2" label="Descripción">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>

        <br />
        <FloatingLabel controlId="floatingInput" label="Cepa" className="mb-3">
          <Form.Control type="text" placeholder="Aceite ..." />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Precio"
          className="mb-3"
        >
          <Form.Control type="number" placeholder="Aceite ..." />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Stock" className="mb-3">
          <Form.Control type="number" placeholder="Aceite ..." />
        </FloatingLabel>


        <Button >Agregar producto</Button>

      </Form>
    </>
  );
};

export default AddProduct;
