import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer, { rootSaga } from './reducers';
import createSagaMiddleware from 'redux-saga';

export const initStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    (typeof window !== 'undefined' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  /* eslint-disable no-underscore-dangle */
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
  /* eslint-enable */
};
