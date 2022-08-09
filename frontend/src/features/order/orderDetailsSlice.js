import { createSlice } from '@reduxjs/toolkit';

const initialState = { orderItems: [], shippingAddress: {} };

const orderDetailsSlice = createSlice({
  name: 'orderDetails',
  initialState,
  reducers: {
    orderDetailsStart: (state) => {
      state.loading = true;
    },
    orderDetailsSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    orderDetailsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { orderDetailsStart, orderDetailsSuccess, orderDetailsFailed } =
  orderDetailsSlice.actions;

export default orderDetailsSlice.reducer;
