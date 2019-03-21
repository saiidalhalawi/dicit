import * as React from 'react';
import QuoteFrameContainer from './containers/quoteFrameContainer';
import QuoteStats from './containers/quoteStatsContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <QuoteFrameContainer />
        <QuoteStats />
      </div>
    );
  }
}

export default App;
