import React from 'react';
import './Dice.css';

const Dice = ({ value }) => {
  return (
    <div className={`dice-${value}`}>
      <div className="face front">
        {value === 1 && <div className="dot"></div>}
      </div>
      <div className="face back">
        {value >= 2 && <div className="dot"></div>}
        {value >= 2 && <div className="dot"></div>}
      </div>
      <div className="face top">
        {value >= 3 && <div className="dot"></div>}
        {value >= 3 && <div className="dot"></div>}
        {value >= 3 && <div className="dot"></div>}
      </div>
      <div className="face bottom">
        {value >= 4 && <div className="dot"></div>}
        {value >= 4 && <div className="dot"></div>}
        {value >= 4 && <div className="dot"></div>}
        {value >= 4 && <div className="dot"></div>}
      </div>
      <div className="face left">
        {value >= 5 && <div className="dot"></div>}
        {value >= 5 && <div className="dot"></div>}
        {value >= 5 && <div className="dot"></div>}
        {value >= 5 && <div className="dot"></div>}
        {value >= 5 && <div className="dot"></div>}
      </div>
      <div className="face right">
        {value === 6 && <div className="dot"></div>}
        {value === 6 && <div className="dot"></div>}
        {value === 6 && <div className="dot"></div>}
        {value === 6 && <div className="dot"></div>}
        {value === 6 && <div className="dot"></div>}
        {value === 6 && <div className="dot"></div>}
      </div>
    </div>
  );
};

export default Dice;
