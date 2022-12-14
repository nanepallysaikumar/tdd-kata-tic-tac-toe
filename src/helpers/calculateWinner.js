const calculateWinner = (board) => {
  const result = {
    hasWon: false,
    isDraw: false,
    winnerName: "",
  };

  if (board[0] && board[0] === board[1] && board[1] === board[2]) {
    result["hasWon"] = true;
    result["winnerName"] = board[0];

    return result;
  }
};

export { calculateWinner };
