import React from "react";
import { Typography, Box } from "@mui/material";
import { Emoji } from "emoji-mart"; 
import dice1 from "../images/dice1.svg";
import dice2 from "../images/dice2.svg";
import dice3 from "../images/dice3.svg";
import dice4 from "../images/dice4.svg";
import dice5 from "../images/dice5.svg";
import dice6 from "../images/dice6.svg";

const getDiceImage = (value) => {
  switch (value) {
    case 1:
      return dice1;
    case 2:
      return dice2;
    case 3:
      return dice3;
    case 4:
      return dice4;
    case 5:
      return dice5;
    case 6:
      return dice6;
    default:
      return null;
  }
};

const Result = ({ result }) => {
  return (
    <Box textAlign="center" p={2}>
     
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', width: '100%' }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <img src={getDiceImage(result.dice1)} alt={`Dice 1: ${result.dice1}`} style={{ width: '15vw', height: '15vh', marginLeft: '10px' }} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <img src={getDiceImage(result.dice2)} alt={`Dice 2: ${result.dice2}`} style={{ width: '15vw', height: '15vh', marginLeft: '10px' }} />
        </Box>
      </Box>

      {result.outcome === "win" && (
        <Box mt={2}>
          <Typography variant="h4">You win! 🏆🏆</Typography>
        </Box>
      )}
      {result.outcome === "lose" && (
        <Box mt={2}>
          <Typography variant="h4">You lose! 😥😥</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Result;
