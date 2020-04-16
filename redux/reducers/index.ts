import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Reducer
import common from './common';
import list from './list';
import user from './user';
import search from './search';

// Saga
import { commonSaga } from './common';
import { userSaga } from './user';
import { searchSaga } from './search';

const rootReducer = combineReducers({
  common,
  user,
  list,
  search,
});

export function* rootSaga() {
  yield all([commonSaga(), userSaga(), searchSaga()]);
}

export default rootReducer;
