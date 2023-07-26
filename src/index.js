import './style.css';
import createNewGame from './modules/newgame';
import onloadScore from './modules/onloadscore.js';
import refreshScores from './modules/get.js';

const submitBtn = document.getElementById('submitBtn');
const refreshBtn = document.getElementById('refreshBtn');
const game = "hey";
const gameId = await getGameId();

async function getGameId() {
    if (localStorage.getItem('gameId')) {
        return localStorage.getItem('gameId')
    } else return createNewGame(game);
}

submitBtn.addEventListener('click', () => {
    onloadScore(gameId);
});

refreshBtn.addEventListener('click', async () => {
    const scores = await refreshScores(gameId);

    let resultTable = document.getElementById('ul');
    let child = resultTable.lastElementChild; 
    while (child) {
        resultTable.removeChild(child);
        child = resultTable.lastElementChild;
    }


    scores.forEach(individualUser => {
        const li = document.createElement('li');
        li.className = 'listItem';
        li.innerHTML = `${individualUser.user} : ${individualUser.score}`

        const isEvenIndex = ul.children.length % 2 === 0;

        if (isEvenIndex) {
            li.style.backgroundColor = 'white';
        } else {
            li.style.backgroundColor = '#cdcbcb';
        }

        resultTable.appendChild(li);
    })

    })

    export { gameId };