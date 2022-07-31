import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginStart: (state) => {
      state.loading = true;
    },
    userLoginSucess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userLoginFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userLogout: (state) => {
      state.loading = false;
      state.userInfo = null;
    },
    userRegisterStart: (state) => {
      state.loading = true;
    },
    userRegisterSucess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userRegisterFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // User Details
    userDetailsStart: (state) => {
      state.loading = true;
    },
    userDetailsSucess: (state, action) => {
      state.loading = false;
      state.userDetails = action.payload;
    },
    userDetailsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  userLoginStart,
  userLoginSucess,
  userLoginFailed,
  userLogout,
  userRegisterStart,
  userRegisterSucess,
  userRegisterFailed,
  userDetailsStart,
  userDetailsSucess,
  userDetailsFailed,
} = userSlice.actions;

export default userSlice.reducer;
