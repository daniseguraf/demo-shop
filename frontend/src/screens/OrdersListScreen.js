import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Table, Button, Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { ordersListStart } from '../features/order/ordersList/ordersListSlice';

const OrdersListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, orders } = useSelector((state) => state.ordersList);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(ordersListStart({ token: userInfo.token }));
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Orders</h1>
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
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((el) => (
              <tr key={el._id}>
                <td>{el._id}</td>
                <td>{el.user.name}</td>
                <td>{el.createdAt.substring(0, 10)}</td>
                <td>${el.totalPrice}</td>

                <td>
                  {el.isPaid ? (
                    el.paidAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {el.isDelivered ? (
                    el.deliveredAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <Link to={`/order/${el._id}`}>
                    <Button variant="light" size="sm">
                      Details
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrdersListScreen;
