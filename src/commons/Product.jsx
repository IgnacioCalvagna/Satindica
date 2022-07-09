import React from "react";
import "../assets/css/producto.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Product = ({ p, img }) => {
  return (
    <div>
      <>
        <Card mb={4} style={{marginBottom: '5%'}} key={p.id}>
          <Card.Img
            variant="top"
            src={img}
            width={"15%"}
            height={"200px"}
            objetcfit="contain"
          />
          <Card.Body variant="success">
            <Card.Title>{p.name}</Card.Title>
            <Card.Text>{p.desc}</Card.Text>
            <Link to={`/product/${p.id}`}>
              <Button variant="success">Detalle del producto</Button>
            </Link>
          </Card.Body>
        </Card>
      </>
    </div>
  );
};

export default Product;
