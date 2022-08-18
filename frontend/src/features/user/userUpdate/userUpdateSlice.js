import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: {} };

const userUpdateSlice = createSlice({
  name: 'userUpdate',
  initialState,
  reducers: {
    userUpdateStart: (state) => {
      state.loading = true;
    },
    userUpdateSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    userUpdateFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userUpdateReset: (state) => {
      state.user = {};
      state.success = false;
    },
  },
});

export const {
  userUpdateStart,
  userUpdateSuccess,
  userUpdateFailed,
  userUpdateReset,
} = userUpdateSlice.actions;

export default userUpdateSlice.reducer;
