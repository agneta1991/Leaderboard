const refreshScores = async (gameId) => {
    const scoresUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`
    const response = await fetch(scoresUrl);
    const data = await response.json();
    console.log(data.result);
    console.log(gameId);
    return data.result; 
  };
  
  export default refreshScores;
  