import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { quotesReducer, DicitState } from '../reducers/quotes';

export type AppState = {
  dicit: DicitState;
};

const store = createStore(
  combineReducers<AppState>({
    dicit: quotesReducer,
  }),
  composeWithDevTools()
);
export default store;
