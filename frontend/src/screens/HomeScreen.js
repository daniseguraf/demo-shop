import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsStart } from '../features/products/productsSlice';

import { Row, Col } from 'react-bootstrap';
import Product from './../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const keyword = params.keyword || '';
  const pageNumber = params.pageNumber || 1;

  const { loading, error, productList, page, pages } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductsStart({ keyword, pageNumber }));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {productList.map((el) => (
              <Col key={el._id} sm={12} md={6} lg={4}>
                <Product {...el} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
