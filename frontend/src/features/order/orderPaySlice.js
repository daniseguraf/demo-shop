import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const orderPaySlice = createSlice({
  name: 'orderPay',
  initialState,
  reducers: {
    orderPayStart: (state) => {
      state.loading = true;
    },
    orderPaySuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    orderPayFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    orderPayReset: (state, action) => {
      state = {};
    },
  },
});

export const { orderPayStart, orderPaySuccess, orderPayFailed, orderPayReset } =
  orderPaySlice.actions;

export default orderPaySlice.reducer;
