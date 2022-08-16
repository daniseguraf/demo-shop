import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userDeleteSlice = createSlice({
  name: 'userDelete',
  initialState,
  reducers: {
    userDeleteStart: (state) => {
      state.loading = true;
    },
    userDeleteSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    userDeleteFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userDeleteStart, userDeleteSuccess, userDeleteFailed } =
  userDeleteSlice.actions;

export default userDeleteSlice.reducer;
