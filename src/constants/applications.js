const VALUE_NINE = 9;
const NULL_VALUE = null;
const PLAYER_ONE = "X";
const PLAYER_TWO = "O";

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export { VALUE_NINE, NULL_VALUE, PLAYER_ONE, PLAYER_TWO, winningLines };
