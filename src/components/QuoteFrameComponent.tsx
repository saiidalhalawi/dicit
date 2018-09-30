import * as React from 'react';
import { DicitState } from '../reducers/quotes';
import { DicitActions } from '../containers/QuoteFrameContainer';

import { QuoteAuthorComponent } from './QuoteAuthorComponent';
import { QuoteSentenceComponent } from './QuoteSentenceComponent';

// interface QuoteFrameProps = {};

type QuoteProps = DicitState & DicitActions;

const styles = `
  .quote-frame {
    color: '#7b7b84';
    height: 100%;
    font-family: 'Times New Roman';
    font-style: italic;
    margin: 10% auto;
    width: 85%;
  }
`;

export class QuoteFrameComponent extends React.Component<QuoteProps> {
  public render(): JSX.Element {
    return (
      <div className="quote-frame">
        <style>
          {styles}
        </style>
        <QuoteSentenceComponent sentence={this.props.quote.sentence} />
        <QuoteAuthorComponent name={this.props.quote.author} />
      </div>
    );
  }
}
