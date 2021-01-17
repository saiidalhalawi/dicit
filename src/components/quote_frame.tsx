import * as React from 'react';
import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';
import styled from 'styled-components';

import { DicitState } from '@states/dicit_state';

import { QuoteStatsComponent } from '@components/quote_stats';
import { QuoteAuthorComponent } from '@components/quote_author';
import { QuoteSentenceComponent } from '@components/quote_sentense';

import fetchRandomQuote from '@libs/fetchQuotes';

const dicitState = atom<DicitState>({
  key: 'currentQuoteState',
  default: fetchRandomQuote(),
});

const QuoteFrame: React.FunctionComponent = (): React.ReactElement => {
  const [current, setDicit] = useRecoilState<DicitState>(dicitState);

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
