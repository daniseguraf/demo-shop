import { takeEvery, put, fork, call } from 'redux-saga/effects';
import { getOrderMyListApi } from '../../../app/api';
import {
  orderMyListStart,
  orderMyListSuccess,
  orderMyListFailed,
} from '../orderMyList/orderMyListSlice';

// Workers
function* workerOrderMyList(action) {
  const { token } = action.payload;

  try {
    const response = yield call(getOrderMyListApi, { token });

    if (response.status === 200) {
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
function* watcherOrderMyList() {
  yield takeEvery(orderMyListStart.type, workerOrderMyList);
}

export const orderMyListSagas = [fork(watcherOrderMyList)];
