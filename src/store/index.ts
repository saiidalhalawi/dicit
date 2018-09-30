import { createStore, combineReducers } from 'redux';

import { quotesReducer, DicitState } from '../reducers/quotes';

export type AppState = {
  dicit: DicitState;
};

const store = createStore(
  combineReducers<AppState>({
    dicit: quotesReducer,
  })
);
export default store;
