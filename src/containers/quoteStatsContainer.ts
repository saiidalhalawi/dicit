import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../store';
import { statsActions } from '../actions';
import { QuoteStatsComponent } from '../components/QuoteStatsComponent';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleClick: () => {
      dispatch(statsActions.getCurrentStats());
    }
  };
}

function mapStateToProps(state: AppState) {
  return Object.assign({}, state.stats);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteStatsComponent);
