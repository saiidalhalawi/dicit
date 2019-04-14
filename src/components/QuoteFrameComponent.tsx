import * as React from "react";
import styled from "styled-components";

import { DicitState } from "@reducers/quotes";
import { DicitActions } from "@containers/QuoteFrameContainer";

import { QuoteStatsComponent } from "@components/QuoteStatsComponent";
import { QuoteAuthorComponent } from "@components/QuoteAuthorComponent";
import { QuoteSentenceComponent } from "@components/QuoteSentenceComponent";

type QuoteProps = DicitState & DicitActions;

const QuoteWrapper = styled.div`
  color: #7b7b84;
  height: 90%;
  margin: auto;
  padding: 3rem 2rem;
  width: 90%;
`;

const QuoteFrame = styled.div`
  font-family: "Times New Roman";
  font-style: italic;
  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;

export const QuoteFrameComponent: React.FC<QuoteProps> = (
  props: QuoteProps
): React.ReactElement => (
  <QuoteWrapper>
    <QuoteFrame onClick={props.handleClick}>
      <QuoteSentenceComponent sentence={props.quote.sentence} />
      <QuoteAuthorComponent name={props.quote.author} />
    </QuoteFrame>
    <QuoteStatsComponent
      whole={props.stats.whole}
      consumed={props.stats.consumed}
    />
  </QuoteWrapper>
);
