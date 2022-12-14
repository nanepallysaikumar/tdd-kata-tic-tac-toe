import { fireEvent } from "@testing-library/react";

const playerX = {
  drewOn: (square) => fireEvent.click(square),
};

const playerO = Object.create(playerX);

export { playerX, playerO };
