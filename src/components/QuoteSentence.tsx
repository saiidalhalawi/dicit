import * as React from "react"

export type QuoteSentenceProps = {
  sentence: string
}

const styles = `
.quote-line {
  animation-name: animating-quote;
  animation-duration: .75s;
  animation-timing-function: ease-out;
  font-size: 4.5rem;
  margin: 0;
  text-align: left;
  transition-delay: .7s;
}

@keyframes animating-quote {
  0%     { opacity: 0; }
  50%    { opacity: 0; }
  75%    { opacity: .25; }
  100%   { opacity: 1; }
}
`

export const QuoteSentence = (props: QuoteSentenceProps) => (
  <div className="quote-line">
    <style>
      {styles}
    </style>
    <p>{ props.sentence }</p>
  </div>
)
