import { all } from 'redux-saga/effects';
import { productsSagas } from '../features/products/productsSagas';
import { productsDetailSagas } from '../features/productDetail/productDetailSagas';
import { cartSagas } from '../features/cart/cartSagas';
import { userSagas } from '../features/user/userSagas';
import { orderCreateSagas } from '../features/order/orderCreateSagas';
import { orderDetailsSagas } from '../features/order/orderDetailsSagas';
import { orderPaySagas } from '../features/order/orderPaySagas';
import { orderMyListSagas } from '../features/order/orderMyList/orderMyListSagas';

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
  ]);
}
