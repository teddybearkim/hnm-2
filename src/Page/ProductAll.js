import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'


const ProductAll = () => {
  const [products, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/teddybearkim/hnm-2/products`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <Container>
      <Row>
        {Array.isArray(products) && products.map((item) => (
          <Col lg={3} key={item.id}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductAll
