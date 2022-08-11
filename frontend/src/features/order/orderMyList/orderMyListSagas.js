import { takeEvery, put, fork, call } from 'redux-saga/effects';
import { orderCreateApi } from '../../../app/api';
import {
  orderMyListStart,
  orderMyListSuccess,
  orderMyListFailed,
} from '../orderCreateSlice';

// Workers
function* onOrderMyListStart(action) {
  const { order, token } = action.payload;

  try {
    const response = yield call(orderCreateApi, { order, token });
    console.log('response:', response);
    if (response.status === 201) {
      yield put(orderMyListSuccess(response.data));
    }
  } catch (error) {
    yield put(
      orderMyListFailed(
        error?.response?.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

// Watchers
function* onOrderMyList() {
  yield takeEvery(orderMyListStart.type, onOrderMyListStart);
}

export const orderMyListSagas = [fork(onOrderMyList)];
