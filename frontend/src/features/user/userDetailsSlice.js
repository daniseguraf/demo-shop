import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: {} };

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    userDetailsStart: (state) => {
      state.loading = true;
    },
    userDetailsSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    userDetailsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userDetailsStart, userDetailsSuccess, userDetailsFailed } =
  userDetailsSlice.actions;

export default userDetailsSlice.reducer;
