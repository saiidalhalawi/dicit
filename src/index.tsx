import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { QuoteFrame } from './components/QuoteFrame';

let remainedQuotes = [];
if ('remainedQuotes' in localStorage) {
  remainedQuotes = JSON.parse(localStorage.getItem('remainedQuotes'));
}

if (remainedQuotes.length === 0) {
  const wholeQuotes = require('./../data/quotes.json');
  remainedQuotes = wholeQuotes.quotes;
}

const index = Math.floor(Math.random() * remainedQuotes.length);
const initialQuote = remainedQuotes[index];

remainedQuotes.splice(index, 1);
localStorage.setItem('remainedQuotes', JSON.stringify(remainedQuotes));

ReactDOM.render(
  <QuoteFrame quote={initialQuote} />,
  document.getElementById('root')
);
