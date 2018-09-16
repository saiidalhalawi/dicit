import * as React from 'react';

export type QuoteAuthorProps = {
  name: string;
};

const styles = `
.quote-author {
  animation-name: animating-author;
  animation-duration: 1.25s;
  animation-timing-function: ease-out;
  font-size: 2.85rem;
  margin: 0;
  text-align: right;
  padding-top: 20px;
  transition-delay: 1.5s;
}
.quote-author > p:before {
  content: '- '
}
@keyframes animating-author {
  0%     { opacity: 0; }
  50%    { opacity: 0; }
  75%    { opacity: .25; }
  100%   { opacity: 1; }
}
`;

export const QuoteAuthor = (props: QuoteAuthorProps) => (
  <div className="quote-author">
    <style>
      {styles}
    </style>
    <p>{props.name}</p>
  </div>
);
