import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { QuoteStatsComponent } from '@components/quote_stats';

describe('Component: QuoteStats', (): void => {
  it('will be rendered with no error', (): void => {
    const whole = 100;
    const consumed = 50;
    renderer.create(<QuoteStatsComponent whole={whole} consumed={consumed} />);
  });
});
