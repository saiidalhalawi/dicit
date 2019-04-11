import * as React from "react";
import styled from "styled-components";

export type QuoteSentenceProps = {
  sentence: string;
};

const QuoteSentenceWrapper = styled.div`
  font-size: 4.5rem;
  margin: 0;
  text-align: left;
`;

const QuoteSentence = styled.p`
  animation-name: fade-quote;
  animation-duration: 0.75s;
  animation-timing-function: ease-out;
  transition-delay: 0.7s;
`;

export const QuoteSentenceComponent: React.FC<QuoteSentenceProps> = (
  props: QuoteSentenceProps
): React.ReactElement => (
  <QuoteSentenceWrapper>
    <QuoteSentence>{props.sentence}</QuoteSentence>
  </QuoteSentenceWrapper>
);
