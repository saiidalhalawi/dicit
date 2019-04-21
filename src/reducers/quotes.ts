import { reducerWithInitialState } from "typescript-fsa-reducers";
import { dicitActions } from "@actions/index";

import { DicitState, fetchRandomQuote } from "@libs/fetch_quotes";

const initialState: DicitState = fetchRandomQuote();

export const quotesReducer = reducerWithInitialState(initialState)
  .case(dicitActions.init, state => {
    return Object.assign({}, state, { initialState });
  })
  .case(dicitActions.fetchNewQuote, state => {
    return Object.assign({}, state, fetchRandomQuote());
  });
