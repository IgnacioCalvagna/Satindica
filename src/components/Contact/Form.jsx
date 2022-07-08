import React from "react";
import "../../assets/css/form.css";
import { Form, FloatingLabel } from "react-bootstrap";

const ElForm = () => {
  return (
    <>
      <>
        <FloatingLabel
          controlId="floatingInput"
          label="Nombre"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="ingrese su email" required />
        </FloatingLabel>
        
        <FloatingLabel controlId="floatingPassword" label="Email">
          <Form.Control type="email" placeholder="Email" required />
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="floatingPassword" label="Telefomo">
          <Form.Control type="phone" placeholder="Telefono" required />
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
          <button className="btn btn-success"type="submit">Enviar</button>
        </FloatingLabel>
      </>
    </>
  );
};

export default ElForm;
