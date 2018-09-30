import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

export type QuoteSentenceProps = {
  sentence: string;
};

const styles = `
.quote-line {
  font-size: 4.5rem;
  margin: 0;
  text-align: left;
}

/*
.quote-line p {
  animation-name: fade-quote;
  animation-duration: .75s;
  animation-timing-function: ease-out;
  transition-delay: .7s;
}

@keyframes fade-quote {
  0%     { opacity: 0; }
  50%    { opacity: 0; }
  75%    { opacity: .25; }
  100%   { opacity: 1; }
}
*/

.fade-enter {
  opacity: 0.01;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity .7s ease-in;
}

.fade-leave {
  opacity: 1;
}

.fade-leave.fade-leave-active {
  opacity: 0.01;
  transition: opacity .7s ease-out;
}
`;

export const QuoteSentenceComponent = (props: QuoteSentenceProps) => (
  <div className="quote-line">
    <style>
      {styles}
    </style>
    <CSSTransition
      in={true}
      classNames="fade"
      timeout={{enter: 1000, exit: 500}}
      appear={true}
      enter={true}
      exit={true}
      mountOnEnter={true}
    >
      <p>{props.sentence}</p>
    </CSSTransition>
  </div>
);
