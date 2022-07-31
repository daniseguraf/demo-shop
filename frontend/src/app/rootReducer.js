import { combineReducers } from '@reduxjs/toolkit';

import productsReducer from '../features/products/productsSlice';
import productDetailReducer from '../features/productDetail/productDetailSlice';
import cartReducer from '../features/cart/cartSlice';
import userLoginReducer from '../features/user/userLoginSlice';
import userRegisterReducer from '../features/user/userRegisterSlice';
import userDetailsReducer from '../features/user/userDetailsSlice';
import userUpdateProfileReducer from '../features/user/userUpdateProfileSlice';

// import {
//   orderCreateReducer,
//   orderDetailsReducer,
//   orderPayReducer,
// } from '../reducers/orderReducers';

const rootReducer = combineReducers({
  products: productsReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  // orderCreate: orderCreateReducer,
  // orderDetails: orderDetailsReducer,
  // orderPay: orderPayReducer,
});

export default rootReducer;
