import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS_SUCCESS,
} from './../constants/cartConstants';

export const addToCart = (id, qty) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          product: data._id,
          name: data.name,
          image: data.image,
          price: data.price,
          countInStock: data.countInStock,
          qty,
        },
      });

      localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (error) {}
  };
};

export const removeFromCart = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: id });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  };
};

export const saveShippingAddress = (data) => {
  return (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS_SUCCESS, payload: data });

    localStorage.setItem('shippingAddress', JSON.stringify(data));
  };
};
