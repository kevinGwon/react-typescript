import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from './reducers';
import createSagaMiddleware from 'redux-saga';

export const initStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  );
};
