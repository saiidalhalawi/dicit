import * as React from 'react';
import { useCallback, useEffect } from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import styled from 'styled-components';

import { DicitState } from '@states/dicit_state';
import { Quote } from '@states/quote_state';
import { QuoteStats } from '@states/quote_stats_state';
import { QuoteStatsComponent } from '@components/QuoteStatsComponent';
import { QuoteAuthorComponent } from '@components/QuoteAuthorComponent';
import { QuoteSentenceComponent } from '@components/QuoteSentenceComponent';

import fetchRandomQuote from '@libs/fetchQuotes';

const defaultQuote: Quote = {
  sentence: '',
  author: '',
};

const defaultStats: QuoteStats = {
  consumed: 0,
  whole: 0,
};

const dicitState = atom<DicitState>({
  key: 'currentQuoteState',
  default: {
    quote: defaultQuote,
    stats: defaultStats,
  },
});

const currentState = selector<DicitState>({
  key: 'currentState',
  get: ({ get }) => get(dicitState),
  set: ({ set }) => set(dicitState, fetchRandomQuote()),
});

const QuoteFrame: React.FunctionComponent = (): React.ReactElement => {
  const [current, setDicit] = useRecoilState(currentState);

  useEffect(() => {
    return () => console.log('unmounting...');
  });

  const handleClick = useCallback(() => {
    setDicit(fetchRandomQuote());
  }, [current]);

  return (
    <QuoteFrameWrapper>
      <QuoteWrapper onClick={handleClick}>
        <QuoteSentenceComponent sentence={current.quote.sentence} />
        <QuoteAuthorComponent name={current.quote.author} />
      </QuoteWrapper>
      <QuoteStatsComponent
        whole={current.stats.whole}
        consumed={current.stats.consumed}
      />
    </QuoteFrameWrapper>
  );
};

const QuoteFrameWrapper = styled.div`
  color: #7b7b84;
  height: 90%;
  margin: auto;
  padding: 3rem 2rem;
  width: 90%;
`;

const QuoteWrapper = styled.div`
  font-family: 'Times New Roman';
  font-style: italic;
  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;

export default QuoteFrame;
