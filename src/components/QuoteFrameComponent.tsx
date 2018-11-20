import * as React from 'react';
import { DicitState } from '../reducers/quotes';
import { DicitActions } from '../containers/QuoteFrameContainer';

import { QuoteAuthorComponent } from './QuoteAuthorComponent';
import { QuoteSentenceComponent } from './QuoteSentenceComponent';

type QuoteProps = DicitState & DicitActions;

const styles = `
  .quote-frame {
    color: #7b7b84;
    height: 90%;
    font-family: 'Times New Roman';
    font-style: italic;
    margin: auto;
    padding: 3rem 2rem;
    width: 90%;
  }
  .quote-frame:hover {
    cursor: pointer;
  }
  .quote-frame:after {
    content: '>';
    font-size: 5rem;
    font-weight: bolder;
    opacity: 0;
    position: fixed;
    right: 3%;
    transform: scale(1,2);
    top: 50%;
    --webkit--transition: opacity .5s ease-out;
    transition: opacity 1s ease-out;
  }
  .quote-frame:hover:after {
    opacity: .5;
    --webkit--transition: opacity .5s ease-in;
    transition: opacity 1s ease-in;
  }
`;

export class QuoteFrameComponent extends React.Component<QuoteProps> {
  public componentDidMount(): void {
    const { rotateQuotes } = this.props;
    rotateQuotes();
  }
  public render(): JSX.Element {
    return (
      <div className="quote-frame" onClick={this.props.handleClick}>
        <style>
          {styles}
        </style>
        <QuoteSentenceComponent sentence={this.props.quote.sentence} />
        <QuoteAuthorComponent name={this.props.quote.author} />
      </div>
    );
  }
}
