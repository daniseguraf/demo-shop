import { all } from 'redux-saga/effects';
import { productsSagas } from '../features/products/productsSagas';
import { productsDetailSagas } from '../features/productDetail/productDetailSagas';
import { cartSagas } from '../features/cart/cartSagas';
import { userSagas } from '../features/user/userSagas';

export default function* rootSaga() {
  yield all([
    ...productsSagas,
    ...productsDetailSagas,
    ...cartSagas,
    ...userSagas,
  ]);
}
