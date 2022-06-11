import axios from 'axios';

export const getProductsApi = async () => {
  return await axios.get('/api/products');
};
