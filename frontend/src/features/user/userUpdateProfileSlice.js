import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userUpdateProfileSlice = createSlice({
  name: 'userUpdateProfile',
  initialState,
  reducers: {
    userUpdateProfileStart: (state) => {
      state.loading = true;
    },
    userUpdateProfileSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.success = true;
    },
    userUpdateProfileFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  userUpdateProfileStart,
  userUpdateProfileSuccess,
  userUpdateProfileFailed,
} = userUpdateProfileSlice.actions;

export default userUpdateProfileSlice.reducer;
