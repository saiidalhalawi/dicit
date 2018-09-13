import * as React from "react"

export type QuoteSentenceProps = {
  sentence: string
}
export const QuoteSentence = (props: QuoteSentenceProps) => (
  <p>{ props.sentence }</p>
)
