import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

enum ActionTypes {
  FETCH_QUOTE = 'FETCH_QUOTE',
}

export const quoteActions = {
  fetchQuote: actionCreator<void>(ActionTypes.FETCH_QUOTE),
};
