import { Square } from "./Sqaure";
import { PLAYER_ONE, PLAYER_TWO } from "../constants/applications";

const Board = ({ board, setBoard, player, setCurrentPlayer, hasWon }) => {
  const drawSquare = (stepNumber) => {
    const updateBoard = [...board];
    const nextPlayer = player === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;

    if (board[stepNumber] !== null) {
      return false;
    }

    updateBoard[stepNumber] = player;
    setBoard(updateBoard);
    setCurrentPlayer(nextPlayer);
  };

  return (
    <div className="container">
      {board.map((square, stepNumber) => (
        <Square
          key={stepNumber}
          value={square}
          hasWon={hasWon}
          onClick={() => drawSquare(stepNumber)}
        />
      ))}
    </div>
  );
};

export { Board };
