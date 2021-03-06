import { createSlice } from '@reduxjs/toolkit';

const initialState = { productList: [], loading: false, error: null };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, action) => {
      state.loading = false;
      state.productList = action.payload;
    },
    getProductsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getProductsStart, getProductsSuccess, getProductsFailed } =
  productsSlice.actions;

export default productsSlice.reducer;
