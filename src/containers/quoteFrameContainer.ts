import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../store';
import { dicitActions } from '../actions';
import { QuoteFrameComponent } from '../components/QuoteFrameComponent';

export interface DicitActions {
  init: () => Action<any>;
  handleClick: () => Action<any>;
  rotateQuotes: () => Action<any>;
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    init: () => dispatch(dicitActions.init()),
    handleClick: () => {
      dispatch(dicitActions.fetchNewQuote());
    },
    rotateQuotes: () => {
      setInterval(() => dispatch(dicitActions.fetchNewQuote()), 240000);
    },
  };
}

function mapStateToProps(state: AppState) {
  return Object.assign({}, state);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteFrameComponent);
