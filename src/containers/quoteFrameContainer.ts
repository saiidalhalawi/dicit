import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../store';
import { dicitActions } from '../actions';
import { QuoteFrameComponent } from '../components/QuoteFrameComponent';

export interface DicitActions {
  init: () => Action<any>;
  fetchQuote: () => Action<any>;
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    init: () => dispatch(dicitActions.init()),
    fetchQuote: () => dispatch(dicitActions.fetchQuote()),
  };
}

function mapStateToProps(state: AppState) {
  return Object.assign({}, state.dicit);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteFrameComponent);
