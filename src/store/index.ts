import { createStore, combineReducers } from 'redux';

import { quotesReducer } from '../reducers/quotes';
import { Quote } from '../states/QuoteState';

export type AppState = {
  quote: Quote;
};

const store = createStore(
  combineReducers<AppState>({
    quote: quotesReducer,
  })
);
export default store;
