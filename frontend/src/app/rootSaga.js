import { all } from 'redux-saga/effects';
import { productsSagas } from '../features/products/productsSagas';
import { productsDetailSagas } from '../features/productDetail/productDetailSagas';
import { cartSagas } from '../features/cart/cartSagas';

export default function* rootSaga() {
  yield all([...productsSagas, ...productsDetailSagas, ...cartSagas]);
}
