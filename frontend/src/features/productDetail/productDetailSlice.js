import { createSlice } from '@reduxjs/toolkit';

const initialState = { product: { reviews: [] }, loading: false, error: null };

const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    getProductDetailStart: (state) => {
      state.loading = true;
    },
    getProductDetailSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    getProductDetailFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateProductDetailStart: (state) => {
      state.loading = true;
    },
    updateProductDetailSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    updateProductDetailFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getProductDetailStart,
  getProductDetailSuccess,
  getProductDetailFailed,
  updateProductDetailStart,
  updateProductDetailSuccess,
  updateProductDetailFailed,
} = productDetailSlice.actions;

export default productDetailSlice.reducer;
