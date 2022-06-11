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
  getProductsRequest,
  getProductsSuccess,
  getProductsError,
} from './productSlice';

// Get products
function* onGetProductsRequest() {
  try {
    const response = yield call(getProductsApi);
    console.log('response:', response);

    if (response.status === 200) {
      yield delay(250);
      yield put(getProductsSuccess(response.data));
    }
  } catch (error) {
    yield put(getProductsError(error?.response?.data));
  }
}

// Listeners
function* onGetProducts() {
  yield takeEvery(getProductsRequest.type, onGetProductsRequest);
}

export const productSagas = [fork(onGetProducts)];
