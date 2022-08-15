import { takeEvery, call, put, fork } from 'redux-saga/effects';
import {
  userListStart,
  userListSuccess,
  userListFailed,
} from './userListSlice';

import { getUserListApi } from '../../../app/api';

// workers
function* workerUserListStart(action) {
  const { token } = action.payload;
  try {
    const response = yield call(getUserListApi, { token });

    if (response.status === 200) {
      yield put(userListSuccess(response.data));
    }
  } catch (error) {
    userListFailed(
      error?.response?.data.message
        ? error.response.data.message
        : error.message
    );
  }
}

// watchers
function* watcherUserList() {
  yield takeEvery(userListStart.type, workerUserListStart);
}

export const userListSagas = [fork(watcherUserList)];
