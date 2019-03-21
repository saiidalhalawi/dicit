import * as React from 'react';
import styled from 'styled-components';

import { QuoteStatsState } from '../reducers/stats';

type StatsProps = QuoteStatsState;

export const QuoteStatsComponent = (props: StatsProps) => {
  return (
    <div>
      <span>{props.stats.consumed} / {props.stats.whole}</span>
    </div>
  );
}
