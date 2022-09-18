import { takeEvery, put, delay, fork, call } from 'redux-saga/effects';
import {
  getProductsApi,
  deleteProductApi,
  productCreateApi,
} from '../../app/api';
import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailed,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailed,
  productCreateStart,
  productCreateSuccess,
  productCreateFailed,
} from './productsSlice';

// Worker sagas
function* workerGetProductsStart(action) {
  try {
    const response = yield call(getProductsApi, action.payload);

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
  const { id, token } = action.payload;

  try {
    const response = yield call(deleteProductApi, { id, token });

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

function* workerProductCreateStart(action) {
  const { user, token } = action.payload;

  try {
    const response = yield call(productCreateApi, { user, token });
    console.log(response.data);
    if (response.status === 201) {
      yield delay(250);
      yield put(productCreateSuccess(response.data));
      action.payload.navigate(`/admin/product/${response.data._id}/edit`);
    }
  } catch (error) {
    yield put(
      productCreateFailed(
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

function* watcherProductCreate() {
  yield takeEvery(productCreateStart.type, workerProductCreateStart);
}

export const productsSagas = [
  fork(watcherGetProducts),
  fork(watcherDeleteProduct),
  fork(watcherProductCreate),
];
