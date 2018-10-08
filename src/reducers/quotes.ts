import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { dicitActions } from '../actions';
import { Quote } from '../states/QuoteState';

export interface DicitState {
  quote: Quote;
}

const fetchRandomQuote = (): Quote => {
  let remainedQuotes = [];
  if ('remainedQuotes' in localStorage) {
    remainedQuotes = JSON.parse(localStorage.getItem('remainedQuotes'));
  }

  if (remainedQuotes.length === 0) {
    const wholeQuotes = require('./../../data/quotes.json');
    remainedQuotes = wholeQuotes.quotes;
  }

  const index = Math.floor(Math.random() * remainedQuotes.length);
  remainedQuotes.splice(index, 1);
  localStorage.setItem('remainedQuotes', JSON.stringify(remainedQuotes));

  return remainedQuotes[index];
};

const initialState: DicitState = { quote: fetchRandomQuote() };

export const quotesReducer = reducerWithInitialState(initialState)
  .case(dicitActions.init, (state) => {
    return Object.assign({}, state, { initialState });
  })
  .case(dicitActions.fetchNewQuote, (state) => {
    return Object.assign({}, state, { quote: fetchRandomQuote() });
  });
