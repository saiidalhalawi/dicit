import * as React from 'react';

import { QuoteState } from '../reducers/quotes';
import { QuoteActions } from '../containers/quoteFrameContainer';

import { QuoteAuthorComponent } from './QuoteAuthorComponent';
import { QuoteSentenceComponent } from './QuoteSentenceComponent';

interface Quote {
  sentence: string;
  author: string;
}

export type QuoteFrameProps = {
  quote: Quote;
};

type QuoteProps = QuoteFrameProps & QuoteState & QuoteActions;

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

export const QuoteFrameComponent: React.SFC<QuoteProps>  = (props: QuoteProps) => (
  <div className="quote-frame">
    <style>
      {styles}
    </style>
    <QuoteSentenceComponent sentence={props.quote.sentence} />
    <QuoteAuthorComponent name={props.quote.author} />
  </div>
);
