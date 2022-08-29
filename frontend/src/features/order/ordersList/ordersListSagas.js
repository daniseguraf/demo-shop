import { takeEvery, put, fork, call } from 'redux-saga/effects';
import { getOrdersApi } from '../../../app/api';
import {
  ordersListStart,
  ordersListSuccess,
  ordersListFailed,
} from './ordersListSlice';

// Workers
function* ordersListStartWorker(action) {
  const { token } = action.payload;

  try {
    const response = yield call(getOrdersApi, { token });
    if (response.status === 200) {
      yield put(ordersListSuccess(response.data));
    }
  } catch (error) {
    yield put(
      ordersListFailed(
        error?.response?.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

// Watchers
function* ordersListWatcher() {
  yield takeEvery(ordersListStart.type, ordersListStartWorker);
}

export const ordersListSagas = [fork(ordersListWatcher)];
