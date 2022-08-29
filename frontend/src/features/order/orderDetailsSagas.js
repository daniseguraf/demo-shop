import { takeEvery, put, fork, call } from 'redux-saga/effects';
import { getOrderDetailsApi, deliverOrderApi } from '../../app/api';
import {
  orderDetailsStart,
  orderDetailsSuccess,
  orderDetailsFailed,
  orderDeliverStart,
  orderDeliverSuccess,
  orderDeliverFailed,
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

function* orderDeliverStartWorker(action) {
  const { id, token } = action.payload;

  try {
    const response = yield call(deliverOrderApi, { id, token });
    if (response.status === 200) {
      yield put(orderDeliverSuccess(response.data));
    }
  } catch (error) {
    yield put(
      orderDeliverFailed(
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

function* orderDeliverWatcher() {
  yield takeEvery(orderDeliverStart.type, orderDeliverStartWorker);
}

export const orderDetailsSagas = [
  fork(onOrderDetails),
  fork(orderDeliverWatcher),
];
