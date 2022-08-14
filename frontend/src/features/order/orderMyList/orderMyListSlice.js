import { createSlice } from '@reduxjs/toolkit';

const initialState = { orders: [] };

const orderMyListSlice = createSlice({
  name: 'orderMyList',
  initialState,
  reducers: {
    orderMyListStart: (state) => {
      state.loading = true;
    },
    orderMyListSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    orderMyListFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    orderMyListReset: (state) => {
      state.orders = [];
    },
  },
});

export const {
  orderMyListStart,
  orderMyListSuccess,
  orderMyListFailed,
  orderMyListReset,
} = orderMyListSlice.actions;

export default orderMyListSlice.reducer;
