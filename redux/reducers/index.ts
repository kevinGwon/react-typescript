import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import common from './common';
import list from './list';
import { commonSaga } from './common';
import user from './user';

const rootReducer = combineReducers({
  common,
  user,
  list,
});

export function* rootSaga() {
  yield all([commonSaga()]);
}

export default rootReducer;
