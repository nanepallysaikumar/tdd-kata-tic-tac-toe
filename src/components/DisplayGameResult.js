const DisplayGameResult = ({ hasWon, winnerName, isDraw }) => {
  return (
    <div>
      {hasWon && (
        <p data-testid="winner">{winnerName} is the Winner of the Match.</p>
      )}

      {isDraw && !hasWon && <p data-testid="winner">Match is Draw.</p>}
    </div>
  );
};

export { DisplayGameResult };
