import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// Persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import extend from '../modules/extend';

const persistConfig = {
  key: 'nextjs',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const initStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistedReducer,
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(sagaMiddleware)
      : composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  store['__persistor'] = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return store;
};
