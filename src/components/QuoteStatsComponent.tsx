import * as React from 'react';
import styled from 'styled-components';

import { QuoteStats } from '../states/QuoteStatsState';

const QuoteStatsFrame = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: auto;
  padding: 1rem;
  text-align: right;
`;

const QuoteStatsContents = styled.span`
  display: inline-block;
  padding: 1rem 0;
`;

export const QuoteStatsComponent = (props: QuoteStats) => {
  return (
    <QuoteStatsFrame>
      <QuoteStatsContents>{props.consumed} / {props.whole}</QuoteStatsContents>
    </QuoteStatsFrame>
  );
}
