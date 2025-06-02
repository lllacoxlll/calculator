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

// let num1 = prompt('First number:')
// let operator = prompt('Operator')
// let num2 = prompt('Second number:')

function operate(num1, operator, num2) {
  if (operator === '+') alert(add(num1, num2))
  if (operator === '-') alert(subtract(num1, num2))
  if (operator === '*') alert(multiply(num1, num2))
  if (operator === '/') alert(divide(num1, num2))
}
