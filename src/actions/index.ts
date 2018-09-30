import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const dicitActions = {
  init: actionCreator('INIT'),
  fetchQuote: actionCreator('FETCH_QUOTE'),
};
