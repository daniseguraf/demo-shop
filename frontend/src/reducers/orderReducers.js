import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
} from '../constants/orderConstants';

export const orderCreateReducer = (state = {}, action) => {
  if (action.type === ORDER_CREATE_REQUEST) {
    return { loading: true };
  }
  if (action.type === ORDER_CREATE_SUCCESS) {
    return { loading: false, order: action.payload, success: true };
  }
  if (action.type === ORDER_CREATE_FAIL) {
    return { loading: false, error: action.payload };
  }

  return state;
};

export const orderDetailsReducer = (
  state = { orderItems: [], shippingAddress: {} },
  action
) => {
  if (action.type === ORDER_DETAILS_REQUEST) {
    return { ...state, loading: true };
  }
  if (action.type === ORDER_DETAILS_SUCCESS) {
    return { loading: false, order: action.payload };
  }
  if (action.type === ORDER_DETAILS_FAIL) {
    return { loading: false, error: action.payload };
  }

  return state;
};
