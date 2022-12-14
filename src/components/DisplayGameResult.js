const DisplayGameResult = ({ hasWon, winnerName }) => {
  return (
    <div>
      {hasWon && (
        <p data-testid="winner">{winnerName} is the Winner of the Match.</p>
      )}
    </div>
  );
};

export { DisplayGameResult };
