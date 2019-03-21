import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { statsActions } from '../actions';
import { QuoteStats } from '../states/QuoteStatsState';
import console = require('console');

export interface QuoteStatsState {
  stats: QuoteStats;
}

const getCurrentStats = (): QuoteStatsState => {
  let remainedQuotes = [];
  if ('remainedQuotes' in localStorage) {
    remainedQuotes = JSON.parse(localStorage.getItem('remainedQuotes'));
  }

  const wholeQuotes = require('./../../data/quotes.json');
  const wholeQuotesCount = wholeQuotes.quotes.length
  if (remainedQuotes.length === 0) {
    remainedQuotes = wholeQuotes.quotes;
  }
  const remainedCount = wholeQuotesCount - remainedQuotes.length;
  return { stats: { consumed: remainedCount, whole: wholeQuotesCount } };
};

const initialState: QuoteStatsState = getCurrentStats();

export const statsReducer = reducerWithInitialState(initialState)
  .case(statsActions.getCurrentStats, (state) => {
    return Object.assign({}, state, { stats: getCurrentStats() });
  });
