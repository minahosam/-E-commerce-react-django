import React,{useState,useEffect} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../Container/Product'

function HomePage() {
  const [products,setProducts]=useState([])
  useEffect(() => {
    async function fetchProducts(){
      const {data} = await axios.get('/')
      setProducts(data)  
    }
    fetchProducts();
  },[])
  return (
    <Container>
        <Row sm={12} md={6} lg={4} xl={3}>
            {products.map(product => (
                <Col key={product._id}>
                    <Product product={product} />
                </Col>
                ))}
        </Row>
    </Container>
  )
}

export default HomePage