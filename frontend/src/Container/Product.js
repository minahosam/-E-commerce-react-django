import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating';
import { Link } from 'react-router-dom';

function Product({product}) {
  return (
    <Card style={{ width: '18rem' }} className="p-3 rounded">
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} />
        </a>
        <Card.Body>
            <a href={`/product/${product._id}`}>
                <Card.Title>{product.name}</Card.Title>
            </a>
            <Card.Text as="div">
                <Rating rate={product.rating} reviews={`${product.numReviews} reviews`} color='red'/>
            </Card.Text>
            <Card.Text as='div'>
                <div>${product.price}</div>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}


export default Product
