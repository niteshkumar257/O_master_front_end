// GameItem.jsx
import React from 'react';

const GameItem = ({ game }) => {
  return (
    <>
     <div className="game-item">
      <p>{game.bet_id}</p>
      <p>{game.bet_type}</p>
      <p>{game.amount}🪙</p>
      <p>{game.result==="win"?game.result+ "🏆" :game.result + "😥"}</p>
    </div>
    </>
   
  );
};

export default GameItem;
