import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row,Col,ListGroup,ListGroupItem,Card,Button } from 'react-bootstrap'
import Product from '../Container/Product'
import Rating from '../Container/Rating'
import axios from 'axios'

function ProductPage({match}) {
  const [product,setProduct]=useState([])
  useEffect(() => {
    async function fetchProduct(){
      const {data}=await axios.get(`/product/${match.params.id}/`)
      setProduct(data)
    }
    fetchProduct();
  })
  return (
    <div>
      <a href="/" className="btn btn-light py-3">Go Back</a>
      <Row>
        <Col md={6}>
          <img src={product.image} alt={product.name} fluid='true' />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rate={product.rating} reviews={`${product.numReviews} reviews`} color='black' />
            </ListGroup.Item>
            <ListGroup.Item>
              price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              description: {product.description}
            </ListGroup.Item>
          </ListGroup>       
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price :
                  </Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status :
                  </Col>
                  <Col>
                    <strong>{product.countInStock > 0 ? 'In Stock':'outStock'}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item >
                <Button className="btn-block" type="button" disabled={product.countInStock == 0}>Add to basket</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductPage