import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from '../constants/productConstants';

const productListReducer = (slice = { products: [] }, action) => {
  if (action.type === PRODUCT_LIST_REQUEST) {
    return { loading: true, ...slice };
  }
  if (action.type === PRODUCT_LIST_SUCCESS) {
    return { loading: false, products: action.payload };
  }
  if (action.type === PRODUCT_LIST_FAIL) {
    return { loading: false, error: action.payload };
  }

  return slice;
};

const productDetailReducer = (slice = { product: { reviews: [] } }, action) => {
  if (action.type === PRODUCT_DETAIL_REQUEST) {
    return { loading: true, ...slice };
  }
  if (action.type === PRODUCT_DETAIL_SUCCESS) {
    return { loading: false, product: action.payload };
  }
  if (action.type === PRODUCT_DETAIL_FAIL) {
    return { loading: false, error: action.payload };
  }

  return slice;
};

export { productListReducer, productDetailReducer };
