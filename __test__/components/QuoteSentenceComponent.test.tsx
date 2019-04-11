import * as React from "react";
import * as renderer from "react-test-renderer";

import { QuoteSentenceComponent } from "@components/QuoteSentenceComponent";

describe("Component: QuoteSentence", (): void => {
  it("will be rendered with no error", (): void => {
    const sentence = "I am the future.";
    renderer.create(<QuoteSentenceComponent sentence={sentence} />);
  });
});
