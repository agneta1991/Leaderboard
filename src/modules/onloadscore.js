const onloadScore = async (gameId) => {
    const nameInput = document.getElementById('nameInput');
    const scoreInput = document.getElementById('scoreInput');
    const game = "game";
    const scoresUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`
    console.log(scoresUrl);

    const requestData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: nameInput.value,
            score: scoreInput.value
        })
    };

    const response = await fetch(scoresUrl, requestData);
    const data = await response.json();
    console.log(data);
    console.log(data.result);
};


export default onloadScore;