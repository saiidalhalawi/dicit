import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { AppState } from "@store/index";
import { dicitActions } from "@actions/index";
import { QuoteFrameComponent } from "@components/QuoteFrameComponent";

export interface DicitActions {
  init: () => Action<void>;
  handleClick: () => Action<any>;
}

const mapDispatchToProps = (dispatch: Dispatch): DicitActions => {
  return {
    init: () => dispatch(dicitActions.init()),
    handleClick: (): any => {
      dispatch(dicitActions.fetchNewQuote());
    }
  };
};

const mapStateToProps = (state: AppState) => {
  return Object.assign({}, state);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteFrameComponent);
