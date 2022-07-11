import { takeEvery, put, delay, fork, call } from 'redux-saga/effects';
import { userLoginApi } from '../../app/api';
import {
  userLoginStart,
  userLoginSucess,
  userLoginFailed,
  userLoginLogout,
} from './userSlice';

// Worker sagas
function* onUserLoginStart(action) {
  const { email, password } = action.payload;

  try {
    const response = yield call(userLoginApi, { email, password });
    if (response.status === 200) {
      yield delay(250);
      yield put(userLoginSucess(response.data));
      yield put(
        localStorage.setItem('userInfo', JSON.stringify(response.data))
      );
    }
  } catch (error) {
    yield put(
      userLoginFailed(
        error?.response?.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

// Watcher sagas
function* onUserLogin() {
  yield takeEvery(userLoginStart.type, onUserLoginStart);
}

export const userSagas = [fork(onUserLogin)];
