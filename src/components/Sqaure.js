const Square = ({ value, onClick }) => {
  return (
    <button data-testid="square" onClick={onClick}>
      {value}
    </button>
  );
};

export { Square };
