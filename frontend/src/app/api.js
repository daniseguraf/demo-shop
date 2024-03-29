import axios from 'axios';

export const getProductsApi = async ({ keyword, pageNumber = '' }) => {
  return await axios.get(
    `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
  );
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

export const orderCreateApi = async (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.token}`,
    },
  };

  return await axios.post(`/api/orders`, data.order, config);
};

export const getOrderDetailsApi = async (data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  return await axios.get(`/api/orders/${data.id}`, config);
};

export const payOrderApi = async (data) => {
  const { orderId, paymentResult, token } = data;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config);
};

export const getOrderMyListApi = async (data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  return await axios.get(`/api/orders/myorders`, config);
};

export const getUserListApi = async (data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  return await axios.get(`/api/users`, config);
};

export const deleteUserApi = async (data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  return await axios.delete(`/api/users/${data.id}`, config);
};

export const userUpdateApi = async (data) => {
  const { id, user, token } = data;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios.put(`/api/users/${id}`, user, config);
};

export const deleteProductApi = async (data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  return await axios.delete(`/api/products/${data.id}`, config);
};

export const productCreateApi = async (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.token}`,
    },
  };
  return await axios.post('/api/products', data.user, config);
};

export const productUpdateApi = async (data) => {
  const { id, product, token } = data;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios.put(`/api/products/${id}`, product, config);
};

export const getOrdersApi = async (data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  return await axios.get(`/api/orders`, config);
};

export const deliverOrderApi = async (data) => {
  const { id, token } = data;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios.get(`/api/orders/${id}/deliver`, config);
};

export const productCreateReviewApi = async ({ productId, review, token }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios.post(`/api/products/${productId}/reviews`, review, config);
};
