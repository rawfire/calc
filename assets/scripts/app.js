const defaultValue = 0;
let currentResult = defaultValue;

// gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// generates and writes calculation log
function createWriteOutput(operator, resultBefore, calcNum) {
  const calcDescription = `${resultBefore} ${operator} ${calcNum}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNum;
  createWriteOutput("+", initialResult, enteredNum);
}
/* 
we have to build the description first  of calcDescription to
be able to display a currentResult before the currentResult is change
we also need to create an initialResult variable to place in function
so it doesn't get confused with currentResult already calculated
*/

function subtract() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNum;
  createWriteOutput("-", initialResult, enteredNum);
}

function multiply() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNum;
  createWriteOutput("x", initialResult, enteredNum);
}

function divide() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNum;
  createWriteOutput("/", initialResult, enteredNum);
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
