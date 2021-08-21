console.log("SiMON Says");

// PANEL SELECTORS AND PANEL ARRAY
const topLeft = document.querySelector(".top-left")
const topRight = document.querySelector(".top-right")
const bottomLeft = document.querySelector(".bottom-left")
const bottomRight = document.querySelector(".bottom-right")

const simonButtons = document.querySelectorAll('.simon-button')

const center = document.querySelector(".center").querySelector("h2")

const panels = [
  topLeft,
  topRight,
  bottomRight,
  bottomLeft,
];

// MENU BUTTONS
const arcade = document.querySelector("#arcade")
arcade.addEventListener('click', startGame)
const versus = document.querySelector("#versus")
// versus.addEventListener('click',)

// SCORING SELECTORS AND INCREASE SCORE FUNCTION
const currentScore = document.querySelector("#current-score").querySelector("p")
console.log(currentScore);
const highScore = document.querySelector("#high-score").querySelector("h4")
console.log(highScore);


// ROUND AND TIMER SELECTORS
const round = document.querySelector("#round").querySelector("h3")
console.log(round);
const timer = document.querySelector("#timer").querySelector("p")
console.log(timer);




// GAME OBJECT & HIGH SCORE STORAGE
const game = {
  round: "",
  timer: 10,
  currentScore: 0,
}


let sessionHighScore = null;

// TIMER FUNCTION
function startTimer() {
  const clock = setInterval(() => {
    timer.innerHTML = `${game.timer}`

    game.timer--

    if (game.timer < 0) {
      game.timer = 0
      clearInterval(clock)
    }
  }, 1000)
  // const clockTenths = setInterval(() => {
  //   timer.innerHTML = `${game.timer}`.`${game.timerTenths}`
  // }, 100)
}

function enableButtons() {
  topLeft.disabled = false;
  topRight.disabled = false;
  bottomRight.disabled = false;
  bottomLeft.disabled = false;
}

function disableButtons() {
  topLeft.disabled = true;
  topRight.disabled = true;
  bottomRight.disabled = true;
  bottomLeft.disabled = true;
}

// START GAME FUNCTION
function startGame() {
  game.round = 1;
  round.innerHTML = game.round
  setTimeout(loopSequence, 1000)
  enableButtons()
}

// RESTART GAME
const restartButton = document.querySelector("#restart")
function showRestart() {
  center.innerHTML = ""
  restartButton.style.display = 'flex'
}


// END GAME FUNCTION
function endGame() {
  game.timer = 0
  disableButtons()
  center.innerHTML = 'Game Over'
  if (game.currentScore > sessionHighScore) {
    sessionHighScore = game.currentScore
    populateHighScore()
    showRestart()
  }
}


// INCREASE SCORE FUNCTION
const increaseScore = () => {
  game.currentScore += 100
  currentScore.innerHTML = `${game.currentScore}`
}


// FLASH PANEL FUNCTION
const flashPanel = (panel) => {
  panel.className += ' active'
  setTimeout(() => {
    panel.className = panel.className.replace(' active', '')
  }, 500)
}

// RETURNS A RANDOM PANEL
const getRandomPanel = () => {
  return panels[Math.floor(Math.random() * panels.length)];
}


// SEQUENCE & PLAYER GUESSING
const sequence = [getRandomPanel()]
let guessSequence = [...sequence]

// FUNCTION AND VARIABLE FOR CLICKED PANEL

const clickedPanel = (panel) => {
  const guessPanel = guessSequence.shift()
  if (guessPanel === panel) {
    increaseScore()
    if (guessSequence.length === 0) {
      game.round++
      round.innerHTML = game.round
      sequence.push(getRandomPanel())
      guessSequence = [...sequence]
      setTimeout(loopSequence, 1000)
    }
  } else {
    endGame()
  }
}

// HIGH SCORE FUNCTIONS
const setHighScore = () => {
  console.log(sessionHighScore + " setHi");
  if (sessionHighScore > 0) {
    sessionHighScore = sessionStorage.getItem('sessionHighScore')
  }
  highScore.innerHTML = `High Score: ${sessionHighScore}`
}

const populateHighScore = () => {
  console.log(sessionHighScore + " popHi");
  sessionStorage.setItem('sessionHighScore', sessionHighScore)
  setHighScore()
}

setHighScore()


// AARAY OF PANELS TO LOOP RANDOM SEQUENCE THROUGH WITH FLASH FUNCTION
function loopSequence() {
  game.timer = 10
  for (let i = 0; i < sequence.length; i++) {
    setTimeout(flashPanel, 750 * i, sequence[i])
  }
}
