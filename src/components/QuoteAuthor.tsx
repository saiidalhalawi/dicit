import * as React from "react"

export type QuoteAuthorProps = {
  name: string
}
export const QuoteAuthor = (props: QuoteAuthorProps) => (
  <p>{ props.name }</p>
)
