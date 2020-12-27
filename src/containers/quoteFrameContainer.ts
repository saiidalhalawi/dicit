import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '@store/index';
import { dicitActions } from '@actions/index';
import { DicitState } from '@libs/fetchQuotes';
import { QuoteFrameComponent } from '@components/QuoteFrameComponent';

export interface DicitActions {
  init: () => Action<void>;
  handleClick: () => Action<DicitState>;
}

const mapDispatchToProps = (dispatch: Dispatch): DicitActions => {
  return {
    init: (): Action<void> => dispatch(dicitActions.init()),
    handleClick: (): any => {
      dispatch(dicitActions.fetchNewQuote());
    },
  };
};

const mapStateToProps = (state: AppState) => {
  return Object.assign({}, state);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteFrameComponent);
