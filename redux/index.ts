import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  /* eslint-disable no-underscore-dangle */
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  /* eslint-enable */
};
