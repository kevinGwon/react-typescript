import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import list, { testSaga } from './list';
import user from './user';

const rootReducer = combineReducers({
  test: null,
  user,
  list,
});

export function* rootSaga() {
  yield all([testSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
