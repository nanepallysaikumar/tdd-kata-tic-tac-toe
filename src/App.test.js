import { render, screen } from "@testing-library/react";
import {
  SQUARE,
  CURRENT_TURN_TEXT,
  CURRENT_TURN_ACCESSOR,
  CURRENT_TURN_SECOND_PLAYER,
  WINNING_ACCESSOR,
  WINNING_MESSAGE,
} from "./constants/testConstants";
import App from "./App";
import { playerX, playerO } from "./testUtilities/testUtilities";

let squares = [];
let TOP_LEFT, TOP_CENTRE, TOP_RIGHT, MIDDLE_LEFT, BOTTOM_LEFT;

beforeEach(() => {
  render(<App />);
  squares = screen.queryAllByTestId(SQUARE);
  TOP_LEFT = squares[0];
  TOP_CENTRE = squares[1];
  TOP_RIGHT = squares[2];
  MIDDLE_LEFT = squares[3];
  BOTTOM_LEFT = squares[4];
});

test("Board should be available with 9 sqaures when the Game starts.", () => {
  expect(squares).toHaveLength(9);
});

test("Player X Should start the game", () => {
  expect(screen.getByTestId(CURRENT_TURN_ACCESSOR).textContent).toEqual(
    CURRENT_TURN_TEXT
  );
});

test("Turn should be switched to Player O if player X has draw the sqaure", () => {
  playerX.drewOn(TOP_LEFT);
  expect(screen.getByTestId(CURRENT_TURN_ACCESSOR).textContent).toEqual(
    CURRENT_TURN_SECOND_PLAYER
  );
});

test("Players name should be registered on the respective Square after each move.", () => {
  playerX.drewOn(TOP_LEFT);
  playerO.drewOn(TOP_CENTRE);
  expect(TOP_LEFT.textContent).toEqual("X");
  expect(TOP_CENTRE.textContent).toEqual("O");
});

test("Players should not allow to draw a square on already drawn square", () => {
  playerX.drewOn(TOP_LEFT);
  playerO.drewOn(TOP_LEFT);
  expect(TOP_LEFT.textContent).toEqual("X");
});

test("Declare wins when one of the player draws all three squares in the first row", () => {
  playerX.drewOn(TOP_LEFT);
  playerO.drewOn(MIDDLE_LEFT);

  playerX.drewOn(TOP_CENTRE);
  playerO.drewOn(BOTTOM_LEFT);

  playerX.drewOn(TOP_RIGHT);

  expect(screen.getByTestId(WINNING_ACCESSOR).textContent).toEqual(
    WINNING_MESSAGE
  );
});
