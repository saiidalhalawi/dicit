import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../store';
import { quoteActions } from '../actions';
import { Quotes } from '../states/QuoteState';
import { QuoteFrameComponent } from '../components/QuoteFrameComponent';

interface StateFromProps {
  quotes: Quotes;
}

interface DispatchFromProps {
  onClickQuote: (index: number) => void;
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): DispatchFromProps {
  return {
    onClickQuote: (index: any) => dispatch(quoteActions.fetchQuote(v)),
  };
}

function mapStateToProps(state: Quotes): StateFromProps {
  return Object.assign({}, appState.quotes);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteFrameComponent);
