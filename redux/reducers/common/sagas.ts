import { put, delay, takeLatest } from 'redux-saga/effects';
import { LOADING_ON_SAGA, LOADING_ON } from './action';

// Saga
function* runLoadingOnSaga() {
  yield delay(1500);
  yield put({
    type: LOADING_ON,
  });
}

export function* commonSaga() {
  yield takeLatest(LOADING_ON_SAGA, runLoadingOnSaga);
}
