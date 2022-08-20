import { createSlice } from '@reduxjs/toolkit';

const initialState = { productList: [], loading: false, error: null };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.loading = true;
      state.success = false;
    },
    getProductsSuccess: (state, action) => {
      state.loading = false;
      state.productList = action.payload;
    },
    getProductsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteProductStart: (state) => {
      state.loading = true;
      state.success = false;
    },
    deleteProductSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    deleteProductFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailed,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailed,
} = productsSlice.actions;

export default productsSlice.reducer;
