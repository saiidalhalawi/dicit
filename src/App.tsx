import * as React from 'react';
import styled from 'styled-components';

import QuoteFrameContainer from '@containers/quoteFrameContainer';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <QuoteFrameContainer />
    </Wrapper>
  );
};

export default App;
