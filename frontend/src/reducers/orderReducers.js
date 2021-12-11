import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
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
