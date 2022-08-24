import { takeLatest, put, fork, call } from 'redux-saga/effects';

import { getProductDetailApi, productUpdateApi } from '../../app/api';
import {
  getProductDetailStart,
  getProductDetailSuccess,
  getProductDetailFailed,
  updateProductDetailStart,
  updateProductDetailSuccess,
  updateProductDetailFailed,
} from './productDetailSlice';

// Get product
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

// Update product
function* workerUpdateProductDetailStart(action) {
  try {
    const response = yield call(productUpdateApi, action.payload);
    console.log('response', response);
    if (response.status === 201) {
      yield put(updateProductDetailSuccess(response.data));
      action.payload.navigate('/admin/productlist');
    }
  } catch (error) {
    yield put(updateProductDetailFailed(error?.response?.data));
  }
}

// Watchers
function* watcherGetProductDetail() {
  yield takeLatest(getProductDetailStart.type, workerGetProductDetailStart);
}

function* watcherUpdateProductDetail() {
  yield takeLatest(
    updateProductDetailStart.type,
    workerUpdateProductDetailStart
  );
}

export const productsDetailSagas = [
  fork(watcherGetProductDetail),
  fork(watcherUpdateProductDetail),
];

//Airpods Wireless Bluetooth HeadphonesXiomi
