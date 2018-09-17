import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { quoteActions } from '../actions';
import { Quote } from '../states/QuoteState';

const initialState: Quote = {
  quote: null,
};

export const quotesReducer = reducerWithInitialState(initialState)
  .case(quoteActions.fetchQuote, (state) => {
    return { sentence: 'The sinews of war are not gold, but good soldiers.', author: 'Niccoló Machiavelli' };
  });
