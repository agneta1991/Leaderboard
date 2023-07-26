import './style.css';
import createNewGame from './modules/newgame';
import addUser from './modules/adduser.js';
import onloadScore from './modules/onloadscore.js';
import refreshScores from './modules/get.js';

const submitBtn = document.getElementById('submitBtn');
const refreshBtn = document.getElementById('refreshBtn');
const game = "game";
const gameId = getGameId();

function getGameId() {
    if (localStorage.getItem('gameId')){
        return localStorage.getItem('gameId')
    } else return createNewGame(game);
}

submitBtn.addEventListener('click', () => {
    addUser();
});

// refreshBtn.addEventListener('click', async () => {
//       const scores = await refreshScores();
// })

onloadScore('agneta', 42);
refreshScores();

export {gameId};