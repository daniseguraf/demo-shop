import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userByIdSlice = createSlice({
  name: 'userById',
  initialState,
  reducers: {
    userByIdStart: (state) => {
      state.loading = true;
    },
    userByIdSuccess: (action, state) => {
      state.loading = false;
      state.user = action.payload;
    },
    userByIdFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userByIdStart, userByIdSuccess, userByIdFailed } =
  userByIdSlice.actions;

export default userByIdSlice.reducer;
