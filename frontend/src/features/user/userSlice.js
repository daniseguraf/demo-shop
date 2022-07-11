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
    userLoginLogout: (state) => {
      state.userInfo = {};
    },
  },
});

export const {
  userLoginStart,
  userLoginSucess,
  userLoginFailed,
  userLoginLogout,
} = userSlice.actions;

export default userSlice.reducer;
