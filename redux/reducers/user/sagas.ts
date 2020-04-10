import { select, call, put, delay, takeEvery } from 'redux-saga/effects';
import {
  USER_LOGIN_SAGA,
  USER_PENDING,
  USER_SUCCESS,
  USER_ERROR,
  USER_LOGIN,
  USER_KEEP_LOGIN_SAGA,
  USER_LOGOUT_SAGA,
  USER_LOGOUT,
  USER_FAVORITE_SAGA,
  USER_FAVORITE,
} from './action';
import {
  GET_TOKEN,
  GET_USER,
  GET_SESSION,
  GET_ACCOUNT,
  GET_FAVORITE,
} from '../../../modules/api/login';
import { MENU_CLOSE, INTRO_ON } from '../common';
import { POST_FAVORITE } from '../../../modules/api/detail';
import { RootState } from '../../../types/redux/reducer';

const pending = () => ({
  type: USER_PENDING,
});

const success = action => ({
  type: USER_SUCCESS,
  account: action.account,
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
    const { id: account, name } = accountResponse.data;

    // Favorite
    const favoriteResponse = yield call(GET_FAVORITE, account, session);
    const favorite = favoriteResponse.data.results;

    // Info
    const info = {
      name,
      account,
      favorite,
      session,
      token,
    };

    // Success
    yield put(success(info));

    // Login
    yield put({ type: INTRO_ON });
    yield put({ type: USER_LOGIN });

    // Set storage
    localStorage.setItem('name', name);
    localStorage.setItem('token', token);
    localStorage.setItem('account', account);
    localStorage.setItem('session', session);

    // Fail
  } catch (error) {
    yield put(fail(error));
  }
}

function* runKeepLogin(action) {
  // Pending
  yield put(pending());

  try {
    const name = localStorage.getItem('name');
    const token = localStorage.getItem('token');
    const account = Number(localStorage.getItem('account'));
    const session = localStorage.getItem('session');

    // Favorite
    const favoriteResponse = yield call(GET_FAVORITE, account, session);
    const favorite = favoriteResponse.data.results;

    // // Info
    const info = {
      name,
      account,
      favorite,
      session,
      token,
    };

    // // Success
    yield put(success(info));

    // // Login
    yield put({ type: INTRO_ON });
    yield put({ type: USER_LOGIN });

    // Fail
  } catch (error) {
    yield put(fail(error));
  }
}

function* runLogout() {
  localStorage.clear();
  yield put({ type: USER_LOGOUT });
  yield put({ type: MENU_CLOSE });
}

function* runFavorite(action) {
  try {
    // Get info
    const { account, session, id, active } = action.data;

    // Post
    yield call(POST_FAVORITE, account, session, id, active);

    // Repaint favorite
    const favorite = yield call(GET_FAVORITE, account, session);
    const data = favorite.data.results;

    // Dispatch
    yield put({ type: USER_FAVORITE, data });
  } catch (error) {
    yield put(fail(error));
  }
}

export function* userSaga() {
  yield takeEvery(USER_LOGIN_SAGA, runLogin);
  yield takeEvery(USER_KEEP_LOGIN_SAGA, runKeepLogin);
  yield takeEvery(USER_LOGOUT_SAGA, runLogout);
  yield takeEvery(USER_FAVORITE_SAGA, runFavorite);
}
