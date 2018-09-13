import * as React from "react"

import { QuoteSentence } from "./QuoteSentence"
import { QuoteAuthor } from "./QuoteAuthor"

interface Quote {
  sentence: string,
  author: string
}

export type QuoteFrameProps = {
  quote: Quote
}

export const QuoteFrame = (props: QuoteFrameProps) => (
  <div>
    <QuoteSentence sentence={ props.quote.sentence } />
    <QuoteAuthor name={ props.quote.author } />
  </div>
)
