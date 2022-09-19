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
      state.productList = action.payload.products;
      state.pages = action.payload.pages;
      state.page = action.payload.page;
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
    productCreateStart: (state) => {
      state.loading = true;
    },
    productCreateSuccess: (state, action) => {
      state.loading = false;
      state.productList.push(action.payload);
    },
    productCreateFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
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
  productCreateStart,
  productCreateSuccess,
  productCreateFailed,
} = productsSlice.actions;

export default productsSlice.reducer;
