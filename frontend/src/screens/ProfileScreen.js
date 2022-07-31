import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Button, Row, Col } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { userDetailsStart } from '../features/user/userSlice';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.user);
  const { userDetails, error, loading } = useSelector((state) => state.user);

  // const { loading, userDetails, error } = useSelector(
  //   (state) => state.user.userDetails
  // );

  // const { success } = useSelector((state) => state.userUpdateProfile);

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      if (!userDetails) {
        dispatch(userDetailsStart({ id: 'profile', token: userInfo.token }));
      } else {
        setName(userDetails.name);
        setEmail(userDetails.email);
      }
    }
  }, [userInfo, navigate, dispatch, userDetails]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      // dispatch(userUpdateProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>

        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {/* {success && <Message variant="success">Data updated</Message>} */}

        {loading && <Loader />}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Update Profile
          </Button>
        </Form>
      </Col>
      <Col md={9}></Col>
    </Row>
  );
};

export default ProfileScreen;
