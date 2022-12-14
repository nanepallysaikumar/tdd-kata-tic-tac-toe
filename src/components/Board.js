import { Square } from "./Sqaure";
import { PLAYER_ONE, PLAYER_TWO } from "../constants/applications";

const Board = ({ board, setBoard, player, setCurrentPlayer }) => {
  const drawSquare = (stepNumber) => {
    const updateBoard = [...board];
    const nextPlayer = player === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;
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
          onClick={() => drawSquare(stepNumber)}
        />
      ))}
    </div>
  );
};

export { Board };
