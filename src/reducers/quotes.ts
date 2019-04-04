import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { dicitActions } from '../actions';
import { Quote } from '../states/QuoteState';
import { QuoteStats } from '../states/QuoteStatsState';

export interface DicitState {
  quote: Quote;
  stats: QuoteStats;
}

const fetchRandomQuote = (): DicitState => {
  let remainedQuotes: Quote[] = [];
  if ('remainedQuotes' in localStorage) {
    remainedQuotes = JSON.parse(localStorage.getItem('remainedQuotes'));
  }

  const wholeQuotes: { quotes: Quote[] } = require('./../../data/quotes.json');
  if (remainedQuotes.length === 0) {
    remainedQuotes = wholeQuotes.quotes;
  }
  const wholeQuotesCount: number = wholeQuotes.quotes.length;

  const index: number = Math.floor(Math.random() * remainedQuotes.length);

  const picked: Quote = remainedQuotes[index];
  remainedQuotes.splice(index, 1);

  const remainedCount: number = wholeQuotesCount - remainedQuotes.length;
  localStorage.setItem('remainedQuotes', JSON.stringify(remainedQuotes));

  return { quote: picked, stats: { consumed: remainedCount, whole: wholeQuotesCount } };
};

const initialState: DicitState = fetchRandomQuote();

export const quotesReducer = reducerWithInitialState(initialState)
  .case(dicitActions.init, (state) => {
    return Object.assign({}, state, { initialState });
  })
  .case(dicitActions.fetchNewQuote, (state) => {
    return Object.assign({}, state, fetchRandomQuote());
  });
