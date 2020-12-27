import { Quote } from '@states/QuoteState';
import { QuoteStats } from '@states/QuoteStatsState';

export type DicitState = {
  quote: Quote;
  stats: QuoteStats;
};

const fetchWholeQuotes = (): { quotes: Quote[] } =>
  require('@data/quotes.json');

export const fetchRandomQuote = (): DicitState => {
  let remainedQuotes: Quote[] = [];
  if ('remainedQuotes' in localStorage) {
    remainedQuotes = JSON.parse(localStorage.getItem('remainedQuotes'));
  }

  const wholeQuotes = fetchWholeQuotes().quotes;
  if (remainedQuotes.length === 0) {
    remainedQuotes = wholeQuotes;
  }

  let wholeQuotesCount: number = wholeQuotes.length;
  if ('wholeQuotesCount' in localStorage) {
    remainedQuotes = JSON.parse(localStorage.getItem('remainedQuotes'));
  }

  const index: number = Math.floor(Math.random() * remainedQuotes.length);

  remainedQuotes.splice(index, 1);

  const consumedCount: number = wholeQuotesCount - remainedQuotes.length;
  localStorage.setItem('remainedQuotes', JSON.stringify(remainedQuotes));

  return {
    quote: remainedQuotes[index],
    stats: { consumed: consumedCount, whole: wholeQuotesCount },
  };
};
