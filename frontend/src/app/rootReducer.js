import { combineReducers } from '@reduxjs/toolkit';

import productsReducer from '../features/products/productsSlice';
import productDetailReducer from '../features/productDetail/productDetailSlice';
import cartReducer from '../features/cart/cartSlice';
import userLoginReducer from '../features/user/userLoginSlice';
import userRegisterReducer from '../features/user/userRegisterSlice';
import userDetailsReducer from '../features/user/userDetailsSlice';
import userUpdateProfileReducer from '../features/user/userUpdateProfileSlice';
import orderCreateReducer from '../features/order/orderCreateSlice';
import orderDetailsReducer from '../features/order/orderDetailsSlice';
import orderPayReducer from '../features/order/orderPaySlice';
import orderMyListReducer from '../features/order/orderMyList/orderMyListSlice';
import userListReducer from '../features/user/userList/userListSlice';
import userDeleteReducer from '../features/user/userDelete/userDeleteSlice';
import userUpdateReducer from '../features/user/userUpdate/userUpdateSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMyList: orderMyListReducer,
});

export default rootReducer;
