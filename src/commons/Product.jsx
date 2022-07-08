import React from 'react'
import '../assets/css/producto.css'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Product = (  {p,img} ) => {
  return (
    <div >
     
     
        <>
        <Card mb={12}>
  <Card.Img variant="top" src={img} width={'15%'} height={'230px'} objetcfit="contain" />
  <Card.Body>
    <Card.Title>{p.name}</Card.Title>
    <Card.Text>
     {p.desc}
    </Card.Text>
    <Link to={`/product/${p.id}`}>
    <Button variant="primary">Go somewhere</Button>
    </Link>
  </Card.Body>
</Card>
        </>
     
    
    </div>
  )
}

export default Product