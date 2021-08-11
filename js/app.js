console.log("SiMON Says");

const topLeft = document.querySelector("#top-left")
const topRight = document.querySelector("#top-right")
const bottomLeft = document.querySelector("#bottom-left")
const bottomRight = document.querySelector("#bottom-right")

const getRanPanel = () => {
  const panels = [
    topLeft,
    topRight,
    bottomLeft,
    bottomRight
  ];
  return panels[Math.floor(Math.random() * panels.length)]
}
