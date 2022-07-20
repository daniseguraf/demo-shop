import { takeEvery, put, delay, fork, call } from 'redux-saga/effects';
import { userLoginApi } from '../../app/api';
import {
  userLoginStart,
  userLoginSucess,
  userLoginFailed,
  userLogout,
} from './userSlice';

// Worker sagas
function* onUserLoginStart(action) {
  const { email, password } = action.payload;

  try {
    const response = yield call(userLoginApi, { email, password });
    if (response.status === 200) {
      yield delay(250);
      yield put(userLoginSucess(response.data));
      yield localStorage.setItem('userInfo', JSON.stringify(response.data));
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

function* onUserLogoutStart() {
  yield localStorage.removeItem('userInfo');
}

// Watcher sagas
function* onUserLogin() {
  yield takeEvery(userLoginStart.type, onUserLoginStart);
}

function* onUserLogout() {
  yield takeEvery(userLogout.type, onUserLogoutStart);
}

export const userSagas = [fork(onUserLogin), fork(onUserLogout)];
