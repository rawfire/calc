const defaultValue = 0;
let currentResult = defaultValue;
let logEntries = [];

// gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// generates and writes calculation log
function createWriteOutput(operator, resultBefore, calcNum) {
  const calcDescription = `${resultBefore} ${operator} ${calcNum}`;
  outputResult(currentResult, calcDescription);
}

//  writes the log of the equations into am object
function writeToLog(operationIdentifier, prevResult, operationNum, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNum,
    Result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNum;
  createWriteOutput("+", initialResult, enteredNum);
  writeToLog("ADD", initialResult, enteredNum, currentResult);
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
  writeToLog("SUBTRACT", initialResult, enteredNum, currentResult);
}

function multiply() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNum;
  createWriteOutput("x", initialResult, enteredNum);
  writeToLog("MULTIPLY", initialResult, enteredNum, currentResult);
}

function divide() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNum;
  createWriteOutput("/", initialResult, enteredNum);
  writeToLog("DIVIDE", initialResult, enteredNum, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
