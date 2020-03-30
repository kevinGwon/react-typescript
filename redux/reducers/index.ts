import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Reducer
import common from './common';
import list from './list';
import user from './user';

// Saga
import { commonSaga } from './common';
import { userSaga } from './user';

const rootReducer = combineReducers({
  common,
  user,
  list,
});

export function* rootSaga() {
  yield all([commonSaga(), userSaga()]);
}

export default rootReducer;
