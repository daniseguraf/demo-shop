import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  if (action.type === PRODUCT_LIST_REQUEST) {
    return { loading: true, ...state };
  }
  if (action.type === PRODUCT_LIST_SUCCESS) {
    return { loading: false, products: action.payload };
  }
  if (action.type === PRODUCT_LIST_FAIL) {
    return { loading: false, error: action.payload };
  }

  return state;
};

export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  if (action.type === PRODUCT_DETAIL_REQUEST) {
    return { loading: true, ...state };
  }
  if (action.type === PRODUCT_DETAIL_SUCCESS) {
    return { loading: false, product: action.payload };
  }
  if (action.type === PRODUCT_DETAIL_FAIL) {
    return { loading: false, error: action.payload };
  }

  return state;
};
