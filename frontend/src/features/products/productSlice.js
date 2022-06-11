import { createSlice } from '@reduxjs/toolkit';

const initialState = { productList: [], loading: false, error: null };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // GET PRODUCTS
    getProductsRequest: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, action) => {
      state.loading = false;
      state.productList = action.payload;
    },
    getProductsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getProductsRequest, getProductsSuccess, getProductsError } =
  productsSlice.actions;

export default productsSlice.reducer;
