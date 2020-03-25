import { call, put, delay, takeEvery } from 'redux-saga/effects';
import {
  USER_LOGIN_SAGA,
  USER_PENDING,
  USER_SUCCESS,
  USER_ERROR,
  USER_LOGIN_ON,
} from './action';
import {
  GET_TOKEN,
  GET_USER,
  GET_SESSION,
  GET_ACCOUNT,
} from '../../../modules/api/login';

const pending = () => ({
  type: USER_PENDING,
});

const success = action => ({
  type: USER_SUCCESS,
  name: action.name,
  token: action.token,
  session: action.session,
});

const fail = action => ({
  type: USER_ERROR,
  error: action.error,
});

function* runLogin(action) {
  // Pending
  yield put(pending());

  try {
    const tokenResponse = yield call(GET_TOKEN);
    const { request_token: token } = tokenResponse.data;
    const { username, password } = action.user;

    // Contect
    yield call(GET_USER, username, password, token);

    // Session
    const sessionResponse = yield call(GET_SESSION, token);
    const { session_id: session } = sessionResponse.data;
    const accountResponse = yield call(GET_ACCOUNT, session);

    // Info
    const info = {
      name: accountResponse.data.username,
      session,
      token,
    };

    // Success
    yield put(success(info));

    // Login
    yield put({ type: USER_LOGIN_ON });

    // Set Token, Session
    localStorage.setItem('token', token);
    localStorage.setItem('name', info.name);
    sessionStorage.setItem('session', session);

    // Fail
  } catch (error) {
    yield put(fail(error));
  }
}

export function* userSaga() {
  yield takeEvery(USER_LOGIN_SAGA, runLogin);
}
