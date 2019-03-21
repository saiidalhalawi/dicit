import * as React from 'react';
import styled from 'styled-components';

import QuoteFrameContainer from './containers/quoteFrameContainer';
import QuoteStats from './containers/quoteStatsContainer';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <QuoteFrameContainer />
        <QuoteStats />
      </Wrapper>
    );
  }
}

export default App;
