import { winningLines } from "../constants/applications";

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
  return result;
};

export { calculateWinner };
