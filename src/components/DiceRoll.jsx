import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Dice from './Dice';
import './DiceRoll.css';

const DiceRoll = ({ onRoll, result }) => {
  
    const [rolling, setRolling] = useState(false);
    const [diceValue1, setDiceValue1] = useState(1);
    const [diceValue2, setDiceValue2] = useState(1);

    const handleDiceClick = async () => {
        setRolling(true);

        // Simulate dice rolling effect
        setTimeout(async () => {
            await onRoll(); // Roll the dice and fetch the result
            setRolling(false);
        }, 1000);
    };

    return (
        <Box className="dice-container">
            <Typography variant="h6">Click the dice to roll:</Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Dice value="?" onClick={handleDiceClick} isRolling={rolling} />
            </Box>
            {/* <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <Dice value={result ? result.dice1 : diceValue1} />
                <Dice value={result ? result.dice2 : diceValue2} />
            </Box> */}
        </Box>
    );
};

export default DiceRoll;
