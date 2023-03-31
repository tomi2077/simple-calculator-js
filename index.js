let output = document.getElementById("output");
let operator = null;
let operand1 = null;
let operand2 = null;
let operandJustCalculated = null;
let numberList = [];

function addNumber(char) {
    // If an operator was just calculated, clear the output value
    if (operandJustCalculated) {
      output.value = "";
      operandJustCalculated = false;
    }
  
    // Check if the output already contains a decimal point
    if (char === '.' && output.value.includes('.')) {
      return;
    }
  
    // If an operator is set, add the number to the output value
    if (operator !== null) {
      output.value += char;
    } else {
      // If no operator is set, add the number to the output value
      output.value += char;
    }
  }
  
function clearOutput() {
  output.value = '';
  operator = null;
  operand1 = null;
  operand2 = null;
//   clearNumberList();
  operandJustCalculated = false;
}

function setOperator(op) {
  if (operator === null) {
    operator = op;
    operand1 = parseFloat(output.value);
    output.value = "";
  } else {
    calculate();
    operator = op;
  }
}

function calculate() {
  if (operator !== null) {
    operand2 = parseFloat(output.value);
    let result = null;
    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case 'x':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
    }
    output.value = result;
    operator = null;
    operand1 = result;
    operand2 = null;
    // Newline below
    operandJustCalculated = true;   
  }
}