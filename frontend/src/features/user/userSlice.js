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
  },
});

export const { userLoginStart, userLoginSucess, userLoginFailed, userLogout } =
  userSlice.actions;

export default userSlice.reducer;
