import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { QuoteFrame } from "./components/QuoteFrame"

const initialQuote = { sentence: 'Life gives nothing to man without labor.', author: 'Horace' };

ReactDOM.render(
  <QuoteFrame quote={ initialQuote } />,
  document.getElementById("root")
);
