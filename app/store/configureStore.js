import { createStore, combineReducers } from 'redux';
import { commnetReducer } from '../reducers/reducers.js';
import { composeWithDevTools } from "redux-devtools-extension";

export const configure = (initialState = {}) => {
  var reducer = combineReducers({
    commnetReducer
  });

  var store = createStore(reducer, initialState, composeWithDevTools())

  return store;
}