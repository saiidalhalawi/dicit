import * as React from 'react';
import styled from 'styled-components';

import { DicitState } from '../reducers/quotes';
import { DicitActions } from '../containers/QuoteFrameContainer';

import { QuoteAuthorComponent } from './QuoteAuthorComponent';
import { QuoteSentenceComponent } from './QuoteSentenceComponent';

type QuoteProps = DicitState & DicitActions;

const QuoteFrame = styled.div`
  color: #7b7b84;
  height: 90%;
  font-family: 'Times New Roman';
  font-style: italic;
  margin: auto;
  padding: 3rem 2rem;
  width: 90%;
  &:hover {
    cursor: pointer;
  }
`;

export class QuoteFrameComponent extends React.Component<QuoteProps> {
  public componentDidMount(): void {
    const { rotateQuotes } = this.props;
    rotateQuotes();
  }
  public render(): JSX.Element {
    return (
      <QuoteFrame onClick={this.props.handleClick}>
        <QuoteSentenceComponent sentence={this.props.quote.sentence} />
        <QuoteAuthorComponent name={this.props.quote.author} />
      </QuoteFrame>
    );
  }
}
