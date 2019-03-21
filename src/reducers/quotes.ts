import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { dicitActions } from '../actions';
import { Quote } from '../states/QuoteState';
import { QuoteStats } from '../states/QuoteStatsState';

export interface DicitState {
  quote: Quote;
  stats: QuoteStats;
}

const fetchRandomQuote = (): DicitState => {
  let remainedQuotes = [];
  if ('remainedQuotes' in localStorage) {
    remainedQuotes = JSON.parse(localStorage.getItem('remainedQuotes'));
  }

  const wholeQuotes = require('./../../data/quotes.json');
  if (remainedQuotes.length === 0) {
    remainedQuotes = wholeQuotes.quotes;
  }
  const wholeQuotesCount = wholeQuotes.quotes.length
  const remainedCount = wholeQuotesCount - remainedQuotes.length;

  const index = Math.floor(Math.random() * remainedQuotes.length);
  remainedQuotes.splice(index, 1);
  localStorage.setItem('remainedQuotes', JSON.stringify(remainedQuotes));

  return { quote: remainedQuotes[index], stats: { consumed: remainedCount, whole: wholeQuotesCount } };
};

const initialState: DicitState = fetchRandomQuote();

export const quotesReducer = reducerWithInitialState(initialState)
  .case(dicitActions.init, (state) => {
    return Object.assign({}, state, { initialState });
  })
  .case(dicitActions.fetchNewQuote, (state) => {
    return Object.assign({}, state, fetchRandomQuote());
  });
