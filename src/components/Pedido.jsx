import React from 'react'
import { Form, FloatingLabel,Button } from "react-bootstrap";

const Pedido = () => {
  return (
    <> 
        <h1>Hacer pedidos perrito </h1>
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
        </Form>
    </>
  )
}

export default Pedido