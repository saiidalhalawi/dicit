import * as React from "react";
import * as renderer from "react-test-renderer";

import { QuoteAuthorComponent } from "@components/QuoteAuthorComponent";

describe("Component: QuoteAuthor", () => {
  it("will be rendered with no error", () => {
    const name = "Dan Quayle";
    renderer.create(<QuoteAuthorComponent name={name} />);
  });
});
