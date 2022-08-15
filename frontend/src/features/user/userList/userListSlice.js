import { createSlice } from '@reduxjs/toolkit';

const initialState = { users: [] };

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    userListStart: (state) => {
      state.loading = true;
    },
    userListSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    userListFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userListReset: (state) => {
      state.loading = false;
      state.users = [];
    },
  },
});

export const { userListStart, userListSuccess, userListFailed, userListReset } =
  userListSlice.actions;
export default userListSlice.reducer;
