import { DicitState, fetchRandomQuote } from '@libs/fetchQuotes';

describe('@libs: fetchRandomQuote', (): void => {
  it('will return certain contents', (): void => {
    const { quote, stats }: DicitState = fetchRandomQuote();
    expect(quote).toHaveProperty('sentence');
    expect(quote).toHaveProperty('author');
    expect(stats).toMatchObject({ consumed: 1, whole: expect.any(Number) });
  });
});
