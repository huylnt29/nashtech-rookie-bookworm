import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import PrimaryButton from "./primary_button";

test("Renders Add to cart button", async () => {
  render(<PrimaryButton onClick={undefined} color={"default"} />);

  const button = screen.getByRole("button");

  expect(button).toBeDefined();
});
