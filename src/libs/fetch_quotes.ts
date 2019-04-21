import { Quote } from "@states/QuoteState";
import { QuoteStats } from "@states/QuoteStatsState";

export interface DicitState {
  quote: Quote;
  stats: QuoteStats;
}

const fetchWholeQuotes = (): { quotes: Quote[] } =>
  require("@data/quotes.json");

export const fetchRandomQuote = (): DicitState => {
  let remainedQuotes: Quote[] = [];
  if ("remainedQuotes" in localStorage) {
    remainedQuotes = JSON.parse(localStorage.getItem("remainedQuotes"));
  }
  const wholeQuotes = fetchWholeQuotes().quotes;
  if (remainedQuotes.length === 0) {
    remainedQuotes = wholeQuotes;
  }
  const wholeQuotesCount: number = wholeQuotes.length;

  const index: number = Math.floor(Math.random() * remainedQuotes.length);

  const picked: Quote = remainedQuotes[index];
  remainedQuotes.splice(index, 1);

  const remainedCount: number = wholeQuotesCount - remainedQuotes.length;
  localStorage.setItem("remainedQuotes", JSON.stringify(remainedQuotes));

  return {
    quote: picked,
    stats: { consumed: remainedCount, whole: wholeQuotesCount }
  };
};
