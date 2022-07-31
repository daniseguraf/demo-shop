import axios from 'axios';

export const getProductsApi = async () => {
  return await axios.get('/api/products');
};

export const getProductDetailApi = async (id) => {
  return await axios.get(`/api/products/${id}`);
};

export const addToCartApi = async (id) => {
  return await axios.get(`/api/products/${id}`);
};

export const userLoginApi = async (data) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  return await axios.post('/api/users/login', data, config);
};

export const userRegisterApi = async (data) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  return await axios.post('/api/users', data, config);
};

export const userDetailsApi = async (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.token}`,
    },
  };

  return await axios.get(`/api/users/${data.id}`, config);
};

export const userUpdateProfileApi = async (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.token}`,
    },
  };

  return await axios.put(`/api/users/profile`, data.user, config);
};
