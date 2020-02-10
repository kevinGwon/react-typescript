import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initStore = (INISTAIL_STATE = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  /* eslint-disable no-underscore-dangle */
  return createStore(
    rootReducer,
    INISTAIL_STATE,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  /* eslint-enable */
};
