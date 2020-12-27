import * as React from 'react';
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

export type QuoteAuthorProps = {
  name: string;
};

const QuoteAutherWrapper = styled.div`
  font-size: 2.85rem;
  margin: 0;
  text-align: right;
  padding-top: 20px;
`;

const QuoteAuther = styled.p`
  :before {
    content: '- ';
  }
`;

const AnimatedQuoteAuther = animated(QuoteAuther);

export const QuoteAuthorComponent = (
  props: QuoteAuthorProps
): React.ReactElement => {
  const [styleProps, set] = useSpring(() => ({
    from: { opacity: 0, x: 100 },
    to: { opacity: 1, x: 0 },
    delay: 500,
    config: { duration: 2000 },
  }));
  useEffect(() => {
    return () => set({ reset: true });
  }, [props.name]);
  return (
    <QuoteAutherWrapper>
      <AnimatedQuoteAuther style={styleProps}>{props.name}</AnimatedQuoteAuther>
    </QuoteAutherWrapper>
  );
};
