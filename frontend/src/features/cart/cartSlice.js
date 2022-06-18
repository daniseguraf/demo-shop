import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartItems: [], loading: false, error: null };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartStart: (state) => {
      state.loading = true;
    },
    addToCartSuccess: (state, action) => {
      const item = action.payload;
      const existedItem = state.cartItems.find((el) => el.id === item.id);

      if (existedItem) {
        state.cartItems = state.cartItems.map((el) =>
          el.id === existedItem.id ? item : el
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      state.loading = false;
    },
    addToCartFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { addToCartStart, addToCartSuccess, addToCartFailed } =
  cartSlice.actions;
export default cartSlice.reducer;
