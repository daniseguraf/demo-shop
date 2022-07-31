import { takeEvery, put, delay, fork, call } from 'redux-saga/effects';
import {
  userLoginApi,
  userRegisterApi,
  userDetailsApi,
  userUpdateProfileApi,
} from '../../app/api';

import {
  userLoginStart,
  userLoginSuccess,
  userLoginFailed,
  userLogout,
} from './userLoginSlice';

import {
  userRegisterStart,
  userRegisterSucess,
  userRegisterFailed,
} from './userRegisterSlice';

import {
  userDetailsStart,
  userDetailsSuccess,
  userDetailsFailed,
} from './userDetailsSlice';

import {
  userUpdateProfileStart,
  userUpdateProfileSuccess,
  userUpdateProfileFailed,
} from './userUpdateProfileSlice';

// Worker sagas
function* onUserLoginStart(action) {
  const { email, password } = action.payload;

  try {
    const response = yield call(userLoginApi, { email, password });
    if (response.status === 200) {
      yield delay(250);
      yield put(userLoginSuccess(response.data));
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

  try {
    const response = yield call(userRegisterApi, { name, email, password });
    console.log(response);

    if (response.status === 201) {
      yield delay(250);
      yield put(userRegisterSucess(response.data));
      yield put(userLoginSuccess(response.data));
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

function* onUserDetailsStart(action) {
  const { id, token } = action.payload;
  try {
    const response = yield call(userDetailsApi, { id, token });

    if (response.status === 200) {
      yield delay(250);
      yield put(userDetailsSuccess(response.data));
    }
  } catch (error) {
    yield put(
      userDetailsFailed(
        error?.response?.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

function* onUserUpdateProfileStart(action) {
  const { user, token } = action.payload;

  try {
    const response = yield call(userUpdateProfileApi, { user, token });

    if (response.status === 200) {
      yield delay(250);
      yield put(userUpdateProfileSuccess(response.data));
    }
  } catch (error) {
    yield put(
      userUpdateProfileFailed(
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

function* onUserDetails() {
  yield takeEvery(userDetailsStart.type, onUserDetailsStart);
}

function* onUserUpdateProfile() {
  yield takeEvery(userUpdateProfileStart.type, onUserUpdateProfileStart);
}

export const userSagas = [
  fork(onUserLogin),
  fork(onUserLogout),
  fork(onUserRegister),
  fork(onUserDetails),
  fork(onUserUpdateProfile),
];
