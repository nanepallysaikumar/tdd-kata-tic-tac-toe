import { render, screen, fireEvent } from "@testing-library/react";
import {
  SQUARE,
  CURRENT_TURN_TEXT,
  CURRENT_TURN_ACCESSOR,
  CURRENT_TURN_SECOND_PLAYER,
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

test("Turn should be switched to Player O if player X has draw the sqaure", () => {
  const squares = screen.queryAllByTestId(SQUARE);
  fireEvent.click(squares[0]);
  expect(screen.getByTestId(CURRENT_TURN_ACCESSOR).textContent).toEqual(
    CURRENT_TURN_SECOND_PLAYER
  );
});

test("Players name should be registered on the respective Square after each move.", () => {
  const squares = screen.queryAllByTestId(SQUARE);
  fireEvent.click(squares[0]);
  expect(squares[0].textContent).toEqual("X");
});
