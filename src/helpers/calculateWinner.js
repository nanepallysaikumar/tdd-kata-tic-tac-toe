import { winningLines } from "../constants/applications";

function isMatchDraw(board, result) {
  return !board.includes(null) && !result.win;
}

const calculateWinner = (board) => {
  const result = {
    hasWon: false,
    isDraw: false,
    winnerName: "",
  };

  winningLines.forEach((winningLine) => {
    const [squareOne, squareTwo, squareThree] = winningLine;
    if (
      board[squareOne] &&
      board[squareOne] === board[squareTwo] &&
      board[squareTwo] === board[squareThree]
    ) {
      result["hasWon"] = true;
      result["winnerName"] = board[squareOne];

      return;
    }
  });

  if (isMatchDraw(board, result)) {
    result["isDraw"] = true;
    return result;
  }

  return result;
};

export { calculateWinner };
