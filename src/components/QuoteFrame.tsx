import * as React from 'react';

import { QuoteAuthor } from './QuoteAuthor';
import { QuoteSentence } from './QuoteSentence';

interface Quote {
  sentence: string;
  author: string;
}

export type QuoteFrameProps = {
  quote: Quote;
};

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

export const QuoteFrame = (props: QuoteFrameProps) => (
  <div className="quote-frame">
    <style>
      {styles}
    </style>
    <QuoteSentence sentence={props.quote.sentence} />
    <QuoteAuthor name={props.quote.author} />
  </div>
);
