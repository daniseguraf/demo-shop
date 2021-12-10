import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS_SUCCESS,
  CART_SAVE_PAYMENT_METHOD,
} from './../constants/cartConstants';

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
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

  if (action.type === CART_SAVE_SHIPPING_ADDRESS_SUCCESS) {
    return { ...state, shippingAddress: action.payload };
  }

  if (action.type === CART_SAVE_PAYMENT_METHOD) {
    return { ...state, paymentMethod: action.payload };
  }

  return state;
};
