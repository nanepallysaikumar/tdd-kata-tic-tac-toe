import { render, screen } from "@testing-library/react";
import { SQUARE } from "./constants/testConstants";
import App from "./App";

test("Board should be available with 9 sqaures when the Game starts.", () => {
  render(<App />);
  const squares = screen.queryAllByTestId(SQUARE);
  expect(squares).toHaveLength(9);
});
