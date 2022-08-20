import { takeEvery, put, delay, fork, call } from 'redux-saga/effects';
import { getProductsApi, deleteProductApi } from '../../app/api';
import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailed,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailed,
} from './productsSlice';

// Worker sagas
function* workerGetProductsStart() {
  try {
    const response = yield call(getProductsApi);

    if (response.status === 200) {
      yield delay(250);
      yield put(getProductsSuccess(response.data));
    }
  } catch (error) {
    yield put(
      getProductsFailed(
        error?.response?.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

function* workerDeleteProductStart(action) {
  console.log(action.payload);
  const { id, token } = action.payload;

  try {
    const response = yield call(deleteProductApi, { id, token });
    console.log(response);

    if (response.status === 200) {
      yield delay(250);
      yield put(deleteProductSuccess());
    }
  } catch (error) {
    yield put(
      deleteProductFailed(
        error?.response?.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

// Watcher sagas
function* watcherGetProducts() {
  yield takeEvery(getProductsStart.type, workerGetProductsStart);
}

function* watcherDeleteProduct() {
  yield takeEvery(deleteProductStart.type, workerDeleteProductStart);
}

export const productsSagas = [
  fork(watcherGetProducts),
  fork(watcherDeleteProduct),
];
