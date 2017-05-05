import { createStore, combineReducers } from 'redux';
import { commentReducer } from 'reducers/reducers';
import { composeWithDevTools } from "redux-devtools-extension";

export const configure = (initialState = {}) => {
  var reducer = combineReducers({
    commentText: commentReducer
  });

  var store = createStore(reducer, initialState, composeWithDevTools())

  return store;
}