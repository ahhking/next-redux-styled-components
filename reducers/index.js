import { combineReducers } from 'redux';

import app from './app';
import home from './home';

const reducers = combineReducers({
  app,
  home
});

export default reducers;