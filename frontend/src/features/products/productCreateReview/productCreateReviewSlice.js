import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const productCreateReview = createSlice({
  name: 'productCreateReview',
  initialState,
  reducers: {
    productCreateReviewStart: (state) => {
      state.loading = true;
    },
    productCreateReviewSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    productCreateReviewFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productCreateReviewReset: () => initialState,
  },
});

export const {
  productCreateReviewStart,
  productCreateReviewSuccess,
  productCreateReviewFailed,
  productCreateReviewReset,
} = productCreateReview.actions;

export default productCreateReview.reducer;
