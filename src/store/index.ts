import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { quotesReducer, DicitState } from '@reducers/quotes';

export type AppState = DicitState;

const store = createStore(
  quotesReducer,
  composeWithDevTools()
);
export default store;
