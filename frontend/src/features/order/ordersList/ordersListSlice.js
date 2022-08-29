import { createSlice } from '@reduxjs/toolkit';

const initialState = { orders: [] };

const ordersListSlice = createSlice({
  name: 'ordersList',
  initialState,
  reducers: {
    ordersListStart: (state) => {
      state.loading = true;
    },
    ordersListSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    ordersListFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { ordersListStart, ordersListSuccess, ordersListFailed } =
  ordersListSlice.actions;

export default ordersListSlice.reducer;
