import { Quote } from '@states/quote_state';
import { QuoteStats } from '@states/quote_stats_state';

export type DicitState = {
  quote: Quote;
  stats: QuoteStats;
};
