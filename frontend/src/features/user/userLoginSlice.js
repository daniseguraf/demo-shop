import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    userLoginStart: (state) => {
      state.loading = true;
    },
    userLoginSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.error = null;
    },
    userLoginFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userLogout: (state) => {
      state.loading = false;
      state.userInfo = null;
    },
  },
});

export const { userLoginStart, userLoginSuccess, userLoginFailed, userLogout } =
  userLoginSlice.actions;

export default userLoginSlice.reducer;
