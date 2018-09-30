import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { dicitActions } from '../actions';
import { Quote } from '../states/QuoteState';

export interface DicitState {
  quote: Quote;
}

const initialState: DicitState = { quote: { sentence: '', author: '' } };

export const quotesReducer = reducerWithInitialState(initialState)
  .case(dicitActions.init, (state) => {
    return Object.assign({}, state, { initialState });
  })
  .case(dicitActions.fetchQuote, (state) => {
    const currQuote = { sentence: 'The sinews of war are not gold, but good soldiers.', author: 'Niccoló Machiavelli' };
    return Object.assign({}, state, { currQuote });
  });
