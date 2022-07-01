import React from 'react'
import { Button, Form, FloatingLabel } from "react-bootstrap";




const Register = () => {




  return (
    <>
    
    <h2 className=" miH2">Register</h2>
    <div className="elForm">
        <Form className="miForm">
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="Nombre"
            />
            <label htmlFor="floatingInputCustom">Nombre</label>
          </Form.Floating>

          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="Apellido"
            />
            <label htmlFor="floatingInputCustom">Apellido</label>
          </Form.Floating>

         <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="Ingrese su email"
            />
            <label htmlFor="floatingInputCustom">Email</label>
          </Form.Floating>

          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>
        </Form>
      </div>
    
    </>
  )
}

export default Register