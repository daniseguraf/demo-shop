import { all } from 'redux-saga/effects';
import { productSagas } from '../features/products/productSagas';

export default function* rootSaga() {
  yield all([...productSagas]);
}
