function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function operate(num1, operator, num2) {
  if (operator === '+') return add(num1, num2)
  if (operator === '-') return subtract(num1, num2)
  if (operator === '*') return multiply(num1, num2)
  if (operator === '/') return divide(num1, num2)
}

let childBtns = document.querySelectorAll('.childButton')
let display = document.querySelector('#display')
let operateArray = []

childBtns.forEach((childBtn) =>
  childBtn.addEventListener('click', function (e) {
    let buttonVal = e.target.textContent
    if (buttonVal === 'AC') {
      display.textContent = ''
      operateArray.length = 0
    } else if (buttonVal === '=') {
      let toSplit = display.textContent
      let operator = toSplit.match(/[-+/*]/)
      let operateArray = toSplit.split(operator[0])
      let res = operate(parseFloat(operateArray[0]), operator[0], parseFloat(operateArray[1]))
      display.textContent = res
      operateArray.length = 0
      operateArray.push(display.textContent)
    } else {
      display.textContent += buttonVal
    }
  })
)
