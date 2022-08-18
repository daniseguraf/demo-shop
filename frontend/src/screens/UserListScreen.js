import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Table, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { userListStart } from '../features/user/userList/userListSlice';
import { userDeleteStart } from '../features/user/userDelete/userDeleteSlice';

const UserListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.userDelete);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      console.log('aaa');
      dispatch(userListStart({ token: userInfo.token }));
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate, userInfo, success]);

  const deleteHandler = (id) => {
    dispatch(userDeleteStart({ id, token: userInfo.token }));
  };

  return (
    <>
      <h1>Users</h1>

      {loading && <Loader />}
      {error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((el) => (
              <tr key={el._id}>
                <td>{el._id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>
                  {el.isAdmin ? (
                    <i className="fas fa-check" style={{ color: 'green' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <Link to={`/admin/user/${el._id}/edit`}>
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

export default UserListScreen;
