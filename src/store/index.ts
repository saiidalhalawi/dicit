import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { quotesReducer, DicitState } from '../reducers/quotes';
import { statsReducer, QuoteStatsState } from '../reducers/stats';

export type AppState = {
  dicit: DicitState;
  stats: QuoteStatsState;
};

const store = createStore(
  combineReducers<AppState>({
    dicit: quotesReducer,
    stats: statsReducer
  }),
  composeWithDevTools()
);
export default store;
