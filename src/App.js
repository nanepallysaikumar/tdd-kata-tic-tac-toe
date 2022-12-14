import React, { useState } from "react";
import { Board } from "./components/Board";
import { VALUE_NINE, NULL_VALUE } from "./constants/applications";
import "./App.css";

function App() {
  const [board] = useState(Array(VALUE_NINE).fill(NULL_VALUE));

  return <Board board={board} />;
}

export default App;
