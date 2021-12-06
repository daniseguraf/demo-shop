import { CART_ADD_ITEM, CART_REMOVE_ITEM } from './../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  if (action.type === CART_ADD_ITEM) {
    const item = action.payload;

    const existItem = state.cartItems.find((el) => el.product === item.product);

    if (existItem) {
      return {
        ...state,
        cartItems: state.cartItems.map((el) =>
          el.product === existItem.product ? item : el
        ),
      };
    } else {
      return { ...state, cartItems: [...state.cartItems, item] };
    }
  }

  if (action.type === CART_REMOVE_ITEM) {
    return {
      ...state,
      cartItems: state.cartItems.filter((el) => el.product !== action.payload),
    };
  }

  return state;
};
