import { takeEvery, call, put, fork } from 'redux-saga/effects';
import {
  userUpdateStart,
  userUpdateSuccess,
  userUpdateFailed,
} from './userUpdateSlice';
import { userDetailsSuccess } from '../userDetailsSlice';

import { userUpdateApi } from '../../../app/api';

// workers
function* workerUserUpdateStart(action) {
  const { id, user, token } = action.payload;
  try {
    const response = yield call(userUpdateApi, { id, user, token });

    if (response.status === 200) {
      yield put(userUpdateSuccess());
      yield put(userDetailsSuccess(response.data));
    }
  } catch (error) {
    userUpdateFailed(
      error?.response?.data.message
        ? error.response.data.message
        : error.message
    );
  }
}

// watchers
function* watcherUserUpdate() {
  yield takeEvery(userUpdateStart.type, workerUserUpdateStart);
}

export const userUpdateSagas = [fork(watcherUserUpdate)];
