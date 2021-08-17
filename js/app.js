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
  bottomLeft,
  bottomRight
];

const game = {
  round: 1,
  clock: 15
}

// function to light up panels
function lightTopLeftPanel() {
  topLeft.className += ' active'
}

function lightTopRightPanel() {
  topRight.className += ' active'
}

function lightBottomLeftPanel() {
  bottomLeft.className += ' active'
}

function lightBottomRightPanel() {
  bottomRight.className += ' active'
}


// function to turn off panel lightup
function dimTopLeftPanel() {
  topLeft.className = topLeft.className.replace(' active', '')
}

function dimTopRightPanel() {
  topRight.className = topRight.className.replace(' active', '')
}

function dimBottomLeftPanel() {
  bottomLeft.className = bottomLeft.className.replace(' active', '')
}

function dimBottomRightPanel() {
  bottomRight.className = bottomRight.className.replace(' active', '')
}


// lightup function to pass through
function flashTopLeftPanel() {
  lightTopLeftPanel()
  setTimeout(dimTopLeftPanel, 1000)
}

function flashTopRightPanel() {
  lightTopRightPanel()
  setTimeout(dimTopRightPanel, 1000)
}

function flashBottomRightPanel() {
  lightBottomRightPanel()
  setTimeout(dimBottomRightPanel, 1000)
}

function flashBottomLeftPanel() {
  lightBottomLeftPanel()
  setTimeout(dimBottomLeftPanel, 1000)
}



// Array of panels to loop through and call randomly
const flashPanels = [
  flashTopLeftPanel,
  flashTopRightPanel,
  flashBottomRightPanel,
  flashBottomLeftPanel
];

// flashes a random panel
const getRandomLights = () => {
  flashPanels[Math.floor(Math.random() * flashPanels.length)]();
}

// function for timing sequence // explore setInterval later on
// const sequence = [
//   getRandomLights(),
//   getRandomLights(),
//   getRandomLights(),
//   getRandomLights()
// ]

// Loop through to light all panels
function loopRandoms() {
  for (let i = 0; i < flashPanels.length; i++) {
      setTimeout(getRandomLights, 2000 * i)
  }
}

loopRandoms()
