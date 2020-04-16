import { put, delay, select, takeEvery } from 'redux-saga/effects';
import imagesLoaded from 'imagesloaded';

// Action
import { LOADING_SAGA, LOADING_ON, LOADING_OFF } from './action';

// Types
import { RootState } from '../../../types/redux/reducer';

// Modules
import { GET_SEARCH } from '../../../modules/api/list';

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
