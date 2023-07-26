import {gameId} from "../index.js";

const refreshScores = async () => {
    const scoresUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`
    const response = await fetch(scoresUrl);
    const data = await response.json();
    console.log(data.result);
    return data.result; 
  };

  refreshScores();
  
  export default refreshScores;
  