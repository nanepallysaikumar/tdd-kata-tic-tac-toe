import React, { useState } from "react";
import { Board } from "./components/Board";
import { DisplayCurrentTurn } from "./components/DisplayCurrentTurn";
import { VALUE_NINE, NULL_VALUE, PLAYER_ONE } from "./constants/applications";
import "./App.css";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);
  const [board, setBoard] = useState(Array(VALUE_NINE).fill(NULL_VALUE));

  return (
    <div>
      <DisplayCurrentTurn currentTurn={currentPlayer} />
      <Board
        board={board}
        player={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        setBoard={setBoard}
      />
    </div>
  );
}

export default App;
