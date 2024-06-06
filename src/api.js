import axios from "axios";

export const API_URL = "http://localhost:8080/api/v1";

export const rollDice = async (betAmount, betType) => {
  const response = await axios.post(`${API_URL}/game/roll`, {
    amount: betAmount,
    type: betType,
  });

  return response.data;
};

export const updatePoints = async (user_id,outcome,betAmount,betType) => {
console.log("api call",user_id,outcome,betAmount);
  const response = await axios.patch(`${API_URL}/game/points/${user_id}`,{
    amount:betAmount,
    result:outcome,
    type:betType
  });
  console.log(response);
  return response.data;
};
