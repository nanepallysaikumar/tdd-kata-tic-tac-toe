import { Square } from "./Sqaure";
import { PLAYER_ONE, PLAYER_TWO } from "../constants/applications";

const Board = ({ board, player, setCurrentPlayer }) => {
  const drawSquare = () => {
    const nextPlayer = player === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;
    setCurrentPlayer(nextPlayer);
  };

  return (
    <div className="container">
      {board.map((square, stepNumber) => (
        <Square key={stepNumber} value={square} onClick={() => drawSquare()} />
      ))}
    </div>
  );
};

export { Board };
