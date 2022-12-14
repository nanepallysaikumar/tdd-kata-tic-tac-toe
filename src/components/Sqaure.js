const Square = ({ value, onClick, hasWon }) => {
  return (
    <button disabled={hasWon} data-testid="square" onClick={onClick}>
      {value}
    </button>
  );
};

export { Square };
