import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { QuoteAuthorComponent } from '@components/QuoteAuthorComponent';

describe('Component: QuoteAuthor', (): void => {
  it('will be rendered with no error', (): void => {
    const name = 'Dan Quayle';
    renderer.create(<QuoteAuthorComponent name={name} />);
  });
});
