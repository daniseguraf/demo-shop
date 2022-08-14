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
    orderMyListReset: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
  },
});

export const { orderMyListStart, orderMyListSuccess, orderMyListFailed } =
  orderMyListSlice.actions;

export default orderMyListSlice.reducer;
