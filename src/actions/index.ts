import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const dicitActions = {
  init: actionCreator('INIT'),
  fetchNewQuote: actionCreator('FETCH_NEW_QUOTE'),
};
