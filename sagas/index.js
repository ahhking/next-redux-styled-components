import { all } from 'redux-saga/effects';

import app from './app';
import home from './home';

export default function* rootSaga() {
  yield all([
    app(),
    home()
  ]);
}