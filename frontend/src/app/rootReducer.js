import { combineReducers } from '@reduxjs/toolkit';

import productsReducer from '../features/products/productSlice';

// import { cartReducer } from '../reducers/cartReducers';

// import {
//   userLoginReducer,
//   userRegisterReducer,
//   userDetailsReducer,
//   userUpdateProfileReducer,
// } from '../reducers/userReducers';

// import {
//   orderCreateReducer,
//   orderDetailsReducer,
//   orderPayReducer,
// } from '../reducers/orderReducers';

const rootReducer = combineReducers({
  products: productsReducer,
  // productDetail: productDetailReducer,
  // cart: cartReducer,
  // userLogin: userLoginReducer,
  // userRegister: userRegisterReducer,
  // userDetails: userDetailsReducer,
  // userUpdateProfile: userUpdateProfileReducer,
  // orderCreate: orderCreateReducer,
  // orderDetails: orderDetailsReducer,
  // orderPay: orderPayReducer,
});

export default rootReducer;
