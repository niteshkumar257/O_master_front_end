import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import dice from "../assets/icons8-dice-48.png";

const BetOptions = ({ onBetSelect }) => {
  const [selectedBet, setSelectedBet] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleBetChange = (betType) => {
    console.log(betType);
    setSelectedBet(betType);
  };

  const handleAmountChange = (amount) => {
    console.log(amount);
    setSelectedAmount(amount);
  };

  const handleSubmit = () => {
    if (selectedBet && selectedAmount) {
      console.log("button cliked");
      onBetSelect(selectedBet, selectedAmount);
    } else {
      alert("Please select both bet type and amount.");
    }
  };

  return (
    <Box p={2}>
      <Typography variant="h6">Select your bet:</Typography>
      <Box display="flex" justifyContent="center" mt={2} columnGap={2}>
        <Button
          sx={{ width: "100px" }}
          variant={selectedBet === "7up" ? "contained" : "outlined"}
          onClick={() => handleBetChange("7up")}
        >
          7 Up
        </Button>
        <Button
          sx={{ width: "100px" }}
          variant={selectedBet === "7" ? "contained" : "outlined"}
          onClick={() => handleBetChange("7")}
        >
          7
        </Button>
        <Button
          sx={{ width: "100px" }}
          variant={selectedBet === "7down" ? "contained" : "outlined"}
          onClick={() => handleBetChange("7down")}
        >
          7 Down
        </Button>
      </Box>
      <Typography variant="h6" mt={2}>
        Select your amount:
      </Typography>
      <Box display="flex" justifyContent="center" mt={2} columnGap={2}>
        <Button
          sx={{ width: "100px" }}
          variant={selectedAmount === 100 ? "contained" : "outlined"}
          onClick={() => handleAmountChange(100)}
        >
          100
        </Button>
        <Button
          sx={{ width: "100px" }}
          variant={selectedAmount === 200 ? "contained" : "outlined"}
          onClick={() => handleAmountChange(200)}
        >
          200
        </Button>
        <Button
          sx={{ width: "100px" }}
          variant={selectedAmount === 500 ? "contained" : "outlined"}
          onClick={() => handleAmountChange(500)}
        >
          500
        </Button>
      </Box>
      <Button
        sx={{
          width: "100%",
          // backgroundColor: "#947e01",
          color: "white",
          marginTop: "20px",
          
        }}
        variant={selectedAmount === 500 ? "contained" : "outlined"}
        onClick={handleSubmit}
      >
      
       <img src={dice}/>
      </Button>
    </Box>
  );
};

export default BetOptions;
