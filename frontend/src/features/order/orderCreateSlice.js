import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const orderCreateSlice = createSlice({
  name: 'orderCreate',
  initialState,
  reducers: {
    orderCreateStart: (state) => {
      state.loading = true;
      state.success = false;
    },
    orderCreateSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
      state.success = true;
    },
    orderCreateFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { orderCreateStart, orderCreateSuccess, orderCreateFailed } =
  orderCreateSlice.actions;

export default orderCreateSlice.reducer;
