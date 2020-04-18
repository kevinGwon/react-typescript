import { call, put, delay, select, takeEvery } from 'redux-saga/effects';

// Action
import { SEARCH_SAGA, SEARCH_QUERY_LIST, SEARCH_TOTAL_PAGE } from './action';

// Types
import { RootState } from '../../../types/redux/reducer';

// Modules
import { GET_SEARCH } from '../../../modules/api/list';
import { LOADING_SAGA } from '../common';

// Search
function* runSearching() {
  const search = yield select((store: RootState) => store.search);
  const { query, page } = search;
  const { current } = page;

  // GET SEARCH
  const res = yield call(GET_SEARCH, { query, current });
  yield put({ type: SEARCH_TOTAL_PAGE, totalPage: res.data.total_pages });
  yield put({ type: SEARCH_QUERY_LIST, queryList: res.data.results });
}

export function* searchSaga() {
  yield takeEvery(SEARCH_SAGA, runSearching);
}
