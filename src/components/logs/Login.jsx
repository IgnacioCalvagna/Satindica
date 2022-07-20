import React from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import "../../assets/css/login.css";
const Logs = () => {
  return (
    <>
      <h2 className=" miH2">Login</h2>
      <div className="elForm">
        <Form className="miForm">
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Email address</label>
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
  );
};

export default Logs;
