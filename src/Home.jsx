import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setResult, setLoading } from "./redux/action.js";
import { API_URL, rollDice, updatePoints } from "./api";
import { Container, Typography } from "@mui/material";
import Header from "./components/Header";
import BetOptions from "./components/BetOptions";
import DiceRoll from "./components/DiceRoll";
import Result from "./components/Result";
import LoadingModal from "./components/Loader.jsx";
import { Box } from "@mui/material";
import Dice from "./components/Dice.jsx";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
 
  const dispatch = useDispatch();
  const [points, setPoints] = useState(0);
  const result = useSelector((state) => state.result);
  const loading = useSelector((state) => state.loading);
  const token = localStorage.getItem("token");
  const navigate=useNavigate();
  useEffect(()=>{
    if(!token)
      {
        
        navigate('/login');
      }

  },[])
  if(!token) return;
  let user=jwtDecode(token);

  const { userId } = user;
  const [betType, setBetType] = useState(null);
  const [betAmount, setBetAmount] = useState(null);
  const getPoints = () => {
    axios
      .get(`${API_URL}/game/getPoints/${userId}`)
      .then((res) => {
        let { points } = res.data;
        setPoints(points);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPoints();
  }, []);

  const handleBetSelect = async (selectedBetType, selectedBetAmount) => {
    if(points<selectedBetAmount)
      {
         console.log("not able to play ,not enought coins");
         toast.error('NO Enough Coins 😥😥', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
         return ;
      }
   
    setBetType(selectedBetType);
    setBetAmount(selectedBetAmount);
    dispatch(setLoading(true));
    const data = await rollDice(selectedBetAmount, selectedBetType);
    dispatch(setResult(data));
    const { outcome } = data;
    const updatedPoints = await updatePoints(userId, outcome, selectedBetAmount,selectedBetType);
    getPoints();
   
    dispatch(setLoading(false));
  };

  // const handleDiceRoll = async () => {
  //   if (!betType || !betAmount) {
  //     alert("Please select a bet type and amount.");
  //     return;
  //   }

  //   dispatch(setLoading(true));
  //   const data = await rollDice(betAmount, betType);

  //   dispatch(setResult(data));
  //   // const updatedPoints = await updatePoints();
  //   // dispatch(setPoints(updatedPoints.points));
  //   dispatch(setLoading(false));
  // };

 

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",

          borderRadius: "21px",
          height: "auto",
          flexDirection: { xs: "column", md: "row" },
          boxShadow: 15,
          paddingBottom:'1rem'
        }}
      ></Box>
      <Typography variant="h4" style={{ margin: "20px 0" }}>
        Current Points :  {points} 🪙
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",

          borderRadius: "21px",
          height: "auto",
          flexDirection: { xs: "column", md: "row" },
          boxShadow: 15,
        }}
      >
        <BetOptions onBetSelect={handleBetSelect} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",

            height: "auto",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {result && (
            <>
              <Result result={result} />
            </>
          )}
        </Box>
      </Box>
      <ToastContainer/>
      <LoadingModal open={loading}/>
    </Container>
  );
};

export default Home;
