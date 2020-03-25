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
  GET_FAVORITE,
} from '../../../modules/api/login';

const pending = () => ({
  type: USER_PENDING,
});

const success = action => ({
  type: USER_SUCCESS,
  id: action.id,
  name: action.name,
  favorite: action.favorite,
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

    // Account
    const accountResponse = yield call(GET_ACCOUNT, session);
    const { id, name } = accountResponse.data;
    console.log(accountResponse);

    // Favorite
    const favoriteResponse = yield call(GET_FAVORITE, id, session);
    const favorite = favoriteResponse.data.results;

    // Info
    const info = {
      name,
      id,
      favorite,
      session,
      token,
    };

    // Success
    yield put(success(info));

    // Login
    yield put({ type: USER_LOGIN_ON });

    // Set Token, Session
    localStorage.setItem('token', token);
    sessionStorage.setItem('session', session);

    // Fail
  } catch (error) {
    yield put(fail(error));
  }
}

export function* userSaga() {
  yield takeEvery(USER_LOGIN_SAGA, runLogin);
}
