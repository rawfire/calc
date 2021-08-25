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

function calculateResult(calculationType) {
  const enteredNum = getUserNumberInput();
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    !enteredNum // this checks if there is no number given and 0 is treated as false
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNum;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNum;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNum;
    mathOperator = "x";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNum;
    mathOperator = "/";
  }
  createWriteOutput(mathOperator, initialResult, enteredNum);
  writeToLog(calculationType, initialResult, enteredNum, currentResult);
}

/* 
we have to build the description first  of calcDescription to
be able to display a currentResult before the currentResult is change
we also need to create an initialResult variable to place in function
so it doesn't get confused with currentResult already calculated
*/

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
