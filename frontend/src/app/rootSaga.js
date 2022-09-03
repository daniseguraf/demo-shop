import { all } from 'redux-saga/effects';
import { productsSagas } from '../features/products/productsSagas';
import { productsDetailSagas } from '../features/productDetail/productDetailSagas';
import { cartSagas } from '../features/cart/cartSagas';
import { userSagas } from '../features/user/userSagas';
import { orderCreateSagas } from '../features/order/orderCreateSagas';
import { orderDetailsSagas } from '../features/order/orderDetailsSagas';
import { orderPaySagas } from '../features/order/orderPaySagas';
import { orderMyListSagas } from '../features/order/orderMyList/orderMyListSagas';
import { userListSagas } from '../features/user/userList/userListSagas';
import { userDeleteSagas } from '../features/user/userDelete/userDeleteSagas';
import { userUpdateSagas } from '../features/user/userUpdate/userUpdateSagas';
import { ordersListSagas } from '../features/order/ordersList/ordersListSagas';
import { productCreateReviewSagas } from '../features/products/productCreateReview/productCreateReviewSagas';

export default function* rootSaga() {
  yield all([
    ...productsSagas,
    ...productsDetailSagas,
    ...cartSagas,
    ...userSagas,
    ...orderCreateSagas,
    ...orderDetailsSagas,
    ...orderPaySagas,
    ...orderMyListSagas,
    ...userListSagas,
    ...userDeleteSagas,
    ...userUpdateSagas,
    ...ordersListSagas,
    ...productCreateReviewSagas,
  ]);
}
