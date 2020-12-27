import * as React from 'react';
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

export type QuoteSentenceProps = {
  sentence: string;
};

const QuoteSentenceWrapper = styled.div`
  font-size: 4.5rem;
  margin: 0;
  text-align: left;
`;

const QuoteSentence = styled.p``;

const AnimatedQuoteSentence = animated(QuoteSentence);

export const QuoteSentenceComponent: React.FC<QuoteSentenceProps> = (
  props: QuoteSentenceProps
): React.ReactElement => {
  const [styleProps, set] = useSpring(() => ({
    from: { opacity: 0, x: 100 },
    to: { opacity: 1, x: 0 },
    delay: 500,
    config: { duration: 1000 },
  }));
  useEffect(() => {
    return () => set({ reset: true });
  });
  return (
    <QuoteSentenceWrapper>
      <AnimatedQuoteSentence style={styleProps}>
        {props.sentence}
      </AnimatedQuoteSentence>
    </QuoteSentenceWrapper>
  );
};
