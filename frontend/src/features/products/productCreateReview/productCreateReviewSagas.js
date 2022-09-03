import { takeEvery, put, fork, call } from 'redux-saga/effects';
import { productCreateReviewApi } from '../../../app/api';
import {
  productCreateReviewStart,
  productCreateReviewSuccess,
  productCreateReviewFailed,
} from './productCreateReviewSlice';

// Worker sagas
function* productCreateReviewStartWorker(action) {
  const { productId, review, token } = action.payload;

  try {
    const response = yield call(productCreateReviewApi, {
      productId,
      review,
      token,
    });
    console.log(response);

    if (response.status === 201) {
      yield put(productCreateReviewSuccess());
    }
  } catch (error) {
    yield put(
      productCreateReviewFailed(
        error?.response?.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

// Watcher sagas
function* productCreateReviewWatcher() {
  yield takeEvery(
    productCreateReviewStart.type,
    productCreateReviewStartWorker
  );
}

export const productCreateReviewSagas = [fork(productCreateReviewWatcher)];
