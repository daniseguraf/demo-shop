import { takeEvery, put, delay, fork, call } from 'redux-saga/effects';
import { userLoginApi, userRegisterApi } from '../../app/api';
import {
  userLoginStart,
  userLoginSucess,
  userLoginFailed,
  userLogout,
  userRegisterStart,
  userRegisterSucess,
  userRegisterFailed,
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

function* onUserRegisterStart(action) {
  const { name, email, password } = action.payload;
  console.log(action.payload);

  try {
    const response = yield call(userRegisterApi, { name, email, password });
    console.log(response);

    if (response.status === 201) {
      yield delay(250);
      yield put(userRegisterSucess(response.data));
      yield put(userLoginSucess(response.data));
      yield localStorage.setItem('userInfo', JSON.stringify(response.data));
    }
  } catch (error) {
    yield put(
      userRegisterFailed(
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

function* onUserLogout() {
  yield takeEvery(userLogout.type, onUserLogoutStart);
}

function* onUserRegister() {
  yield takeEvery(userRegisterStart.type, onUserRegisterStart);
}

export const userSagas = [
  fork(onUserLogin),
  fork(onUserLogout),
  fork(onUserRegister),
];
