import React from 'react'
import { useState } from 'react';
import { Button,ButtonGroup,Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Ofcanvas = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
        Opciones del staff
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Agregar productos </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Link to='/products/add'> <Button variant='success'>Agregar Aceite</Button> <br /></Link>
           <br />
           <Link to={'/products/pedido'}> <Button variant='success'>Hacer pedido</Button></Link>
          </Offcanvas.Body>
        </Offcanvas>
      </>
  )
}

export default Ofcanvas