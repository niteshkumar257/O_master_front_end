// GamesList.jsx
import React from "react";
import GameItem from "./GameItem";

const GamesList = ({ games }) => {
  return (
    <div className="games-list">
      <div className="game-item">
        <p>Serial</p>
        <p>Bet Type</p>
        <p>Amount🪙</p>
        <p>Result</p>
      </div>
      {games.map((game) => (
        <GameItem key={game.bet_id} game={game} />
      ))}
    </div>
  );
};

export default GamesList;
