import { takeEvery, put, fork, call } from 'redux-saga/effects';
import { payOrderApi } from '../../app/api';
import {
  orderPayStart,
  orderPaySuccess,
  orderPayFailed,
  orderPayReset,
} from './orderPaySlice';

// Workers
function* onOrderPayStart(action) {
  try {
    const response = yield call(payOrderApi, action.payload);
    console.log('response:', response);
    if (response.status === 201) {
      yield put(orderPaySuccess(response.data));
    }
  } catch (error) {
    yield put(
      orderPayFailed(
        error?.response?.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

// Watchers
function* onOrderPay() {
  yield takeEvery(orderPayStart.type, onOrderPayStart);
}

export const orderPaySagas = [fork(onOrderPay)];
