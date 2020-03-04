import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initStore = initailState => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initailState,
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(sagaMiddleware)
      : composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
