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

const getRandomLights = () => {
  const lightPanels = [
    lightTopLeftPanel(),
    lightTopRightPanel(),
    lightBottomRightPanel(),
    lightBottomLeftPanel()
  ];
  return lightPanels[Math.floor(Math.random() * lightPanels.length)];
}

const lightSequence = () => {
  getRandomLights()
}

// lightup function to pass through
function flashSimon() {
  lightTopLeftPanel()
  lightTopRightPanel()
  lightBottomRightPanel()
  lightBottomLeftPanel()
}



// function for timing sequence // explore setInterval later on





// for (let i = 0; i < panels.length; i++) {
//   setTimeout(() => {
//     panels[i].className += ' active'
//   }, 2000)
// }
