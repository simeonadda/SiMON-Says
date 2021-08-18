console.log("SiMON Says");

// Panel selectors & panels array

const topLeft = document.querySelector(".top-left")
const topRight = document.querySelector(".top-right")
const bottomLeft = document.querySelector(".bottom-left")
const bottomRight = document.querySelector(".bottom-right")

const simonButtons = document.querySelectorAll('.simon-button')


const panels = [
  topLeft,
  topRight,
  bottomRight,
  bottomLeft,
];


// GAME OBJECT &

console.log(panels);

const game = {
  round: 1,
  timer: 15,
  currentScore: 0,
  highScore: 0,
}

const currentScore = document.querySelector("#current-score").querySelector("p")
console.log(currentScore);
const highScore = document.querySelector("#high-score").querySelector("h4")
console.log(highScore);

const increaseScore = () => {
  game.currentScore += 100
  currentScore.innerHTML = `${game.currentScore}`
}

const round = document.querySelector("#round").querySelector("h3")
console.log(round);
const timer = document.querySelector("#timer").querySelector("p")
console.log(timer);

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

let clickable = false;

const clickedPanel = (panel) => {
  if (!clickable) return;
  // console.log(panel);
  const guessPanel = guessSequence.shift()
  if (guessPanel === panel) {
    increaseScore()
    if (guessSequence.length === 0) {
      sequence.push(getRandomPanel())
      guessSequence = [...sequence]
      setTimeout(loopSequence, 1500)
    }
  } else {
    // end game function
    if (game.currentScore > game.highScore) {
      game.highScore = game.currentScore
      highScore.innerHTML = `High Score: ${game.highScore}`
      sessionStorage.setItem('sessionHighScore', highScore.innerHTML)
    }
    alert("GAME OVER")
  }
}


// AARAY OF PANELS TO LOOP RANDOM SEQUENCE THROUGH WITH FLASH FUNCTION

const loopSequence = () => {
  for (let i = 0; i < sequence.length; i++) {
    setTimeout(flashPanel, 1000 * i, sequence[i])
  }
  clickable = true;
}

loopSequence()
