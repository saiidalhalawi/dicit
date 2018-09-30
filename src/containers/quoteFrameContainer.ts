import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../store';
import { dicitActions } from '../actions';
import { QuoteFrameComponent } from '../components/QuoteFrameComponent';

export interface DicitActions {
  init: () => Action<any>;
  fetchNewQuote: () => Action<any>;
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    init: () => dispatch(dicitActions.init()),
    fetchNewQuote: () => dispatch(dicitActions.fetchNewQuote()),
  };
}

function mapStateToProps(state: AppState) {
  return Object.assign({}, state.dicit);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteFrameComponent);
