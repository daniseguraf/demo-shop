import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Row, Col } from 'react-bootstrap';
import Product from './../components/Product';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((el) => (
          <Col key={el._id} sm={12} md={6} lg={4}>
            <Product {...el} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
