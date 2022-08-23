import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Table, Button, Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {
  getProductsStart,
  deleteProductStart,
  productCreateStart,
} from '../features/products/productsSlice';

const ProductListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, productList, success } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getProductsStart());
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate, userInfo, success]);

  const createProductHandler = () => {
    dispatch(productCreateStart({ user: userInfo, token: userInfo.token }));
  };

  const deleteHandler = (id) => {
    dispatch(deleteProductStart({ id, token: userInfo.token }));
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col style={{ textAlign: 'right' }}>
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fa fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productList.map((el) => (
              <tr key={el._id}>
                <td>{el._id}</td>
                <td>{el.name}</td>
                <td>${el.price}</td>
                <td>{el.category}</td>
                <td>{el.brand}</td>
                <td>
                  <Link to={`/admin/product/${el._id}/edit`}>
                    <Button variant="light" size="sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteHandler(el._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ProductListScreen;
