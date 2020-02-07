import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import list, { testSaga } from './list';

const rootReducer = combineReducers({
  list,
});

export function* rootSaga() {
  yield all([testSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
