import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { userLogout } from '../features/user/userLoginSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>DemoShop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ alignItems: 'center' }}>
              <Link to="/cart" style={{ color: 'white', marginRight: '1rem' }}>
                <i className="fas fa-shopping-cart"></i> Cart
              </Link>

              {userInfo && Object.keys(userInfo).length ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Link to="/profile">
                    <NavDropdown.Item as="span">Profile</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/login" style={{ color: 'white' }}>
                  <i className="fas fa-user"></i> Sign In
                </Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <Link to="/admin/userlist">
                    <NavDropdown.Item as="span">Users</NavDropdown.Item>
                  </Link>

                  <Link to="/admin/productlist">
                    <NavDropdown.Item as="span">Products</NavDropdown.Item>
                  </Link>

                  <Link to="/admin/orderlist">
                    <NavDropdown.Item as="span">Orders</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
