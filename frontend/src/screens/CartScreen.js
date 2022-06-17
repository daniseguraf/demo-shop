import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
// import { addToCartStart, removeFromCart } from '../features/cart/cartSlice';
import { addToCartStart } from '../features/cart/cartSlice';

import Message from '../components/Message';

const CartScreen = ({ match, location, history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productId = match.params.id;
  const qty = location.search ? +location.search.split('=')[1] : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCartStart({ productId, qty }));
    }
  }, [dispatch, productId, qty]);

  // const removeFromCartHandler = (id) => {
  //   dispatch(removeFromCart(id));
  // };

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>.
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((el) => (
              <ListGroup.Item key={el.product}>
                <Row>
                  {/* Image */}
                  <Col md={2}>
                    <Image src={el.image} alt={el.name} fluid rounded />
                  </Col>

                  {/* Link to product */}
                  <Col md={3}>
                    <Link to={`/product/${el.product}`}>{el.name}</Link>
                  </Col>

                  {/* Price */}
                  <Col md={2}>{el.price}</Col>

                  {/* Selector item */}
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={el.qty}
                      onChange={(e) =>
                        dispatch(addToCartStart(el.product, +e.target.value))
                      }
                    >
                      {[...Array(el.countInStock).keys()].map((val) => (
                        <option key={val + 1} value={val + 1}>
                          {val + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>

                  {/* Remove item from cart */}
                  {/* <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(el.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col> */}
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items{' '}
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
