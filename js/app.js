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

console.log(panels);

const game = {
  round: 1,
  timer: 15
}

// functions to light up & dim panels

// const lightPanel = (panel) => {
//   panel.className += ' active'
// }
//
// const dimPanel = (panel) => {
//   panel.className = panel.className.replace(' active', '')
// }

// lightup function to pass through

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
console.log(guessSequence);

// FUNCTION AND VARIABLE FOR CLICKED PANEL

let clickable = false;

const clickedPanel = (panel) => {
  if (!clickable) return;
  console.log(panel);
  const guessPanel = guessSequence.shift()
  if (guessPanel === panel) {
    if (guessSequence.length === 0) {
      sequence.push(getRandomPanel())
      guessSequence = [...sequence]
      setTimeout(loopSequence, 1500)
    }
  } else {
    // end game
    // check for high score function
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
