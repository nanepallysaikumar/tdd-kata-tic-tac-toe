import { render, screen } from "@testing-library/react";
import {
  SQUARE,
  CURRENT_TURN_TEXT,
  CURRENT_TURN_ACCESSOR,
} from "./constants/testConstants";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

test("Board should be available with 9 sqaures when the Game starts.", () => {
  const squares = screen.queryAllByTestId(SQUARE);

  expect(squares).toHaveLength(9);
});

test("Player X Should start the game", () => {
  expect(screen.getByTestId(CURRENT_TURN_ACCESSOR).textContent).toEqual(
    CURRENT_TURN_TEXT
  );
});
