import * as React from 'react';
import styled from 'styled-components';

import { QuoteStatsState } from '../reducers/stats';

type StatsProps = QuoteStatsState;

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

export const QuoteStatsComponent = (props: StatsProps) => {
  return (
    <QuoteStatsFrame>
      <QuoteStatsContents>{props.stats.consumed} / {props.stats.whole}</QuoteStatsContents>
    </QuoteStatsFrame>
  );
}
