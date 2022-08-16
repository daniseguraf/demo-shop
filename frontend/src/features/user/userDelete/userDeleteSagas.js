import { takeEvery, call, put, fork } from 'redux-saga/effects';
import {
  userDeleteStart,
  userDeleteSuccess,
  userDeleteFailed,
} from './userDeleteSlice';

import { deleteUserApi } from '../../../app/api';

// workers
function* workerUserDeleteStart(action) {
  const { id, token } = action.payload;
  try {
    const response = yield call(deleteUserApi, { id, token });

    if (response.status === 200) {
      yield put(userDeleteSuccess(response.data));
    }
  } catch (error) {
    userDeleteFailed(
      error?.response?.data.message
        ? error.response.data.message
        : error.message
    );
  }
}

// watchers
function* watcherUserDelete() {
  yield takeEvery(userDeleteStart.type, workerUserDeleteStart);
}

export const userDeleteSagas = [fork(watcherUserDelete)];
