import React, { useState, useEffect } from "react";
import { Board } from "./components/Board";
import { DisplayCurrentTurn } from "./components/DisplayCurrentTurn";
import { VALUE_NINE, NULL_VALUE, PLAYER_ONE } from "./constants/applications";
import { DisplayGameResult } from "./components/DisplayGameResult";
import { calculateWinner } from "./helpers/calculateWinner";
import "./App.css";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);
  const [board, setBoard] = useState(Array(VALUE_NINE).fill(NULL_VALUE));
  const [gameResult, setGameResult] = useState();

  useEffect(() => {
    const gameResult = calculateWinner(board);
    const cloneGameResult = { ...gameResult };
    setGameResult(cloneGameResult);
  }, [board]);

  return (
    <div>
      <DisplayCurrentTurn currentTurn={currentPlayer} />
      <DisplayGameResult {...gameResult} />
      <Board
        board={board}
        player={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        setBoard={setBoard}
        {...gameResult}
      />
    </div>
  );
}

export default App;
