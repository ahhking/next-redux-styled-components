import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import rootSaga from '../sagas';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
}

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    initialState,
    bindMiddleware([sagaMiddleware])
  )

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
