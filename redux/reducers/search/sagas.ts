import { put, delay, select, takeEvery } from 'redux-saga/effects';

// Action
import { SEARCH_SAGA, SEARCH_QUERY_LIST } from './action';

// Types
import { RootState } from '../../../types/redux/reducer';

// Modules
import { GET_SEARCH } from '../../../modules/api/list';
import { LOADING_SAGA } from '../common';

// Search
function* runSearching() {
  const query = yield select((store: RootState) => store.search.query);
  const res = yield GET_SEARCH(query);
  yield put({ type: SEARCH_QUERY_LIST, queryList: res.data.results });
}

export function* searchSaga() {
  yield takeEvery(SEARCH_SAGA, runSearching);
}
