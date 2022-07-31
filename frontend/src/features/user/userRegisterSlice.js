import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState,
  reducers: {
    userRegisterStart: (state) => {
      state.loading = true;
    },
    userRegisterSucess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.error = null;
    },
    userRegisterFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userRegisterStart, userRegisterSucess, userRegisterFailed } =
  userRegisterSlice.actions;

export default userRegisterSlice.reducer;
