import { Square } from "./Sqaure";

const Board = ({ board }) => {
  return (
    <div className="container">
      {board.map((square, stepNumber) => (
        <Square key={stepNumber} value={square} />
      ))}
    </div>
  );
};

export { Board };
