import { takeEvery, put, fork, call } from 'redux-saga/effects';
import { orderCreateApi } from '../../app/api';
import {
  orderCreateStart,
  orderCreateSuccess,
  orderCreateFailed,
} from './orderCreateSlice';

// Workers
function* onOrderCreateStart(action) {
  const { order, token } = action.payload;

  try {
    const response = yield call(orderCreateApi, { order, token });
    console.log('response:', response);
    if (response.status === 201) {
      yield put(orderCreateSuccess(response.data));
    }
  } catch (error) {
    yield put(
      orderCreateFailed(
        error?.response?.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

// Watchers
function* onOrderCreate() {
  yield takeEvery(orderCreateStart.type, onOrderCreateStart);
}

export const orderCreateSagas = [fork(onOrderCreate)];
