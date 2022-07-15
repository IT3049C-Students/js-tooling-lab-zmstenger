// Elements
import { RockPaperScissors } from './rock_paper_scissors.js';

const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);;
const userName = document.getElementById(`username`);;
const userSelection = document.getElementById(`user-selection`);;
const goButton = document.getElementById(`go-button`);;
const scoreParagraph = document.getElementById(`score`);;
const gameHistoryParagraph = document.getElementById(`game-history`);;

// instantiate the game object from the `RockPaperScissors` class.
let game = new RockPaperScissors()

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI

function updateScoreTallyUI(){
  scoreParagraph.textContent =  ""
  scoreParagraph.textContent =  `${game.username}: ${game.score.user} vs CPU: ${game.score.cpu}`.toString()
}
// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.textContent = new String
  gameHistoryParagraph.textContent = game.gameHistoryLog.split(", ")
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (e) {
  e.preventDefault()
  gameScreen.classList.remove('d-none')
  const username = userName.value
  welcomeScreen.classList.add('d-none')
  game = new RockPaperScissors(username)
});

// go-button EventListener
goButton.addEventListener(`click`, function (e) {
  e.preventDefault()
  game.play(userSelection.value.toLowerCase())
  updateScoreTallyUI()
  updateGameHistoryUI()

});
