import { takeEvery, put, fork, call } from 'redux-saga/effects';
import { getOrderDetailsApi } from '../../app/api';
import {
  orderDetailsStart,
  orderDetailsSuccess,
  orderDetailsFailed,
} from './orderDetailsSlice';

// Workers
function* onOrderDetailsStart(action) {
  const { id, token } = action.payload;

  try {
    const response = yield call(getOrderDetailsApi, { id, token });
    if (response.status === 200) {
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
  console.log('aaaa', orderDetailsStart.type);
  yield takeEvery(orderDetailsStart.type, onOrderDetailsStart);
}

export const orderDetailsSagas = [fork(onOrderDetails)];
