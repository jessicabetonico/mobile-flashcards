import { createStore, combineReducers } from 'redux';

import middleware from '../middleware';
import decksReducer from './decks';

const rootReducer = combineReducers({
  decks: decksReducer,
});

export default () => {
  const store = createStore(rootReducer, middleware);
  return store;
};
