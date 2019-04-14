import * as React from "react";
import styled from "styled-components";

export type QuoteAuthorProps = {
  name: string;
};

const QuoteAutherWrapper = styled.div`
  animation-name: animating-author;
  animation-duration: 1.25s;
  animation-timing-function: ease-out;
  font-size: 2.85rem;
  margin: 0;
  text-align: right;
  padding-top: 20px;
  transition-delay: 1.5s;
`;

const QuoteAuther = styled.p`
  :before {
    content: "- ";
  }
`;

export const QuoteAuthorComponent = (
  props: QuoteAuthorProps
): React.ReactElement => (
  <QuoteAutherWrapper>
    <QuoteAuther>{props.name}</QuoteAuther>
  </QuoteAutherWrapper>
);
