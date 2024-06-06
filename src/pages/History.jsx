import React,{useEffect, useState} from 'react'
import axios from "axios";
import { API_URL } from "../api";
import { jwtDecode } from "jwt-decode";
import GamesList from './GamesList';
import Header from '../components/Header';
import { Container, Typography,Box } from "@mui/material";


const History = () => {
  const [allGames,setAllGames]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const token=localStorage.getItem('token');
  const user=jwtDecode(token);
  const {userId}=user;
  const getAll=()=>{
    setIsLoading(true);
    axios.get(`${API_URL}/game/allGames/${userId}`)
    .then((res)=>{
       
        setAllGames(res.data.all_games);
        setIsLoading(false);
    }).catch((err)=>{
        setIsLoading(false);
        console.log(err);
    })
  }
  useEffect(()=>{
    getAll();
  },[])
  return (
     <>
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
      >
        {
            isLoading ? <span>loading ...</span> : <GamesList games={allGames}/>
        }
      </Box>
   
    </Container>
     </>
  )
}

export default History