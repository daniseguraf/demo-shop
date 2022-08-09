import { takeEvery, put, fork, call } from 'redux-saga/effects';
import { getOrderDetailsApi } from '../../app/api';
import {
  orderDetailsStart,
  orderDetailsSuccess,
  orderDetailsFailed,
} from './orderDetailsSlice';

// Workers
function* onOrderDetailsStart(action) {
  const { order, token } = action.payload;

  try {
    const response = yield call(getOrderDetailsApi, { order, token });
    if (response.status === 201) {
      yield put(orderDetailsSuccess(response.data));
    }
  } catch (error) {
    yield put(
      orderDetailsFailed(
        error?.response?.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

// Watchers
function* onOrderDetails() {
  yield takeEvery(orderDetailsStart.type, onOrderDetailsStart);
}

export const orderDetailsSagas = [fork(onOrderDetails)];
