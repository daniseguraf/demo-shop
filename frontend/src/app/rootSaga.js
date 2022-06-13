import { all } from 'redux-saga/effects';
import { productsSagas } from '../features/products/productsSagas';
import { productsDetailSagas } from '../features/productDetail/productDetailSagas';

export default function* rootSaga() {
  yield all([...productsSagas, ...productsDetailSagas]);
}
