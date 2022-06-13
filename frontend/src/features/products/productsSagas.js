import {
  take,
  takeEvery,
  takeLatest,
  put,
  delay,
  fork,
  call,
} from 'redux-saga/effects';

import { getProductsApi } from '../../app/api';
import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailed,
} from './productsSlice';

// Get products
function* onGetProductsStart() {
  try {
    const response = yield call(getProductsApi);

    if (response.status === 200) {
      yield delay(250);
      yield put(getProductsSuccess(response.data));
    }
  } catch (error) {
    yield put(getProductsFailed(error?.response?.data));
  }
}

// Listeners
function* onGetProducts() {
  yield takeEvery(getProductsStart.type, onGetProductsStart);
}

export const productsSagas = [fork(onGetProducts)];
