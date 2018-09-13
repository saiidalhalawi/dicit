import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { QuoteFrame } from "./components/QuoteFrame"

const quotesCollection = require('./../data/quotes.json');

const index = Math.floor(Math.random()*quotesCollection['quotes'].length)
const initialQuote = quotesCollection['quotes'][index];

ReactDOM.render(
  <QuoteFrame quote={initialQuote} />,
  document.getElementById("root")
);
