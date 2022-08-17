import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { userDetailsStart } from '../features/user/userDetailsSlice';
import Loader from '../components/Loader';

const UserEditScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();
  const params = useParams();
  // const location = useLocation();
  // const navigate = useNavigate();

  const { loading, user, error } = useSelector((state) => state.userDetails);
  const { token } = useSelector((state) => state.userLogin.userInfo);

  useEffect(() => {
    if (!user.name || user._id !== params.id) {
      dispatch(userDetailsStart({ id: params.id, token }));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [
    dispatch,
    token,
    params.id,
    user.name,
    user.email,
    user.isAdmin,
    user._id,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   setMessage('Passwords do not match');
    // } else {
    //   dispatch(userRegisterStart({ name, email, password }));
    // }
  };

  return (
    <>
      <Link to="/admin/userlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <br />
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <br />
            <Form.Group controlId="isAdmin">
              <Form.Check
                type="checkbox"
                label="Is admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.check)}
              ></Form.Check>
            </Form.Group>

            <br />
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditScreen;
