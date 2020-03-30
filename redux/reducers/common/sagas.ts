import { put, delay, takeEvery } from 'redux-saga/effects';
import { LOADING_SAGA, LOADING_ON, LOADING_OFF } from './action';
import imagesLoaded from 'imagesloaded';

// Loading
function* runLoading(action) {
  yield put({
    type: LOADING_ON,
  });
  yield delay(1000);
  const imgLoad = imagesLoaded(document.querySelector('article'));
  imgLoad.on('always', () => {
    action.dispatch({
      type: LOADING_OFF,
    });
  });
}

export function* commonSaga() {
  yield takeEvery(LOADING_SAGA, runLoading);
}
