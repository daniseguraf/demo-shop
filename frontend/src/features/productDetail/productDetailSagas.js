import { takeLatest, put, fork, call } from 'redux-saga/effects';

import { getProductDetailApi } from '../../app/api';
import {
  getProductDetailStart,
  getProductDetailSuccess,
  getProductDetailFailed,
} from './productDetailSlice';

// Get products
function* workerGetProductDetailStart(action) {
  try {
    const response = yield call(getProductDetailApi, action.payload.id);

    if (response.status === 200) {
      yield put(getProductDetailSuccess(response.data));
    }
  } catch (error) {
    yield put(getProductDetailFailed(error?.response?.data));
  }
}

// Watchers
function* watcherGetProductDetail() {
  yield takeLatest(getProductDetailStart.type, workerGetProductDetailStart);
}

export const productsDetailSagas = [fork(watcherGetProductDetail)];
