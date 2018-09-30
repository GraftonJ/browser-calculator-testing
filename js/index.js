console.log("included js/index.js")

const screen = document.getElementById('screen')

function setScreen(value) {
  // do stuff
  screen.innerText = value
}

function getScreen() {
  return screen.innerText
}

function clearScreen() {
  setScreen('')
}

function appendScreen(value) {
  setScreen(getScreen() + value)
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2
      break;
    case '-':
      return num1 - num2
      break;
    case '÷':
      return num1 / num2
      break;
    case 'x':
    return num1 * num2
    break;
    default:
      return 'ERROR'
  }
}

function parseScreen(input = getScreen()) {
  let [num1, operator, num2] = input.match(/(\d+)([+-x÷])(\d+)/).slice(1)
  return [+num1, operator, +num2]
}
//document.addEventListener("DOMContentLoadd", () => {

//add event listener for buttons
document.getElementById('clear').addEventListener('click', clearScreen)

// do everything
  document.getElementById("buttons-container").addEventListener("click", (event) => {
    console.log("clicked", event.target, event.target.innerText)
    let buttonText = event.target.innerText

    if (buttonText.match(/\d/)){
      // append to screen
      appendScreen(buttonText)
    }
    else if (buttonText.match(/[+x÷-]/)) {
      // append to screen
      appendScreen(buttonText)
    }
    else if (buttonText === "=") {
      // calculate stuff
      let result = calculate(...parseScreen())
      setScreen(result)
    }
  })
//})
