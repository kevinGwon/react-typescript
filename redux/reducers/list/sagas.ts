// 임시적으로 위치
import { put, delay, takeLatest } from 'redux-saga/effects';
import { LIST_RESET, ACTION } from './actions';

// Saga
function* runTestSaga() {
  yield delay(500);
  yield put({
    type: LIST_RESET,
  });
}

export function* testSaga() {
  yield takeLatest(ACTION, runTestSaga);
}
