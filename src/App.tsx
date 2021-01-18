import * as React from 'react';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

import QuoteFrame from '@components/quote_frame';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const App: React.FunctionComponent = (): React.ReactElement => {
  return (
    <RecoilRoot>
      <Wrapper>
        <QuoteFrame />
      </Wrapper>
    </RecoilRoot>
  );
};

export default App;
