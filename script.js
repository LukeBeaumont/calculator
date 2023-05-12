let currentValue = "";
let previousValue = "";
let currentOperator = "";

const currentDisplay = document.querySelector(".current");
const previousDisplay = document.querySelector(".previous");

const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");
const equals = document.querySelector(".equals");

let numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

clear.addEventListener("click", clearCalc);

equals.addEventListener("click", calculate);

decimal.addEventListener("click", handleDecimal)

numbers.forEach((num)=> num.addEventListener("click", (e)=> handleNumber(e.target.textContent)));

operators.forEach((op) => op.addEventListener("click", (e)=> handleOperator(e.target.textContent)))
 
function clearCalc() {
    currentValue = "";
    previousValue = "";
    currentOperator = "";
    currentDisplay.textContent = "0";
    previousDisplay.textContent = "";
}

function handleNumber(num) {
    if(currentValue.length <= 9) {
        currentValue += num;
    }
    currentDisplay.textContent = currentValue;
    console.log (previousValue, currentOperator, currentValue);
}

function handleOperator(op) {
    if(currentValue != "" && previousValue != ""){ 
        
        currentOperator = op;
        calculate();
       
       
    } else if ( currentValue != "" || previousValue != "") {
        currentOperator = op;
        previousValue = currentValue; 
        currentValue = "";

        previousDisplay.textContent = previousValue + " " + currentOperator;
        currentDisplay.textContent = "";
    }
    console.log (previousValue, currentOperator, currentValue);
}

function calculate() {
    if(currentValue != "" && previousValue != "") {
        currentValue = Number(currentValue);
        previousValue = Number(previousValue); 

     if(currentOperator === "+") {
        previousValue += currentValue;
        } else if (currentOperator === "-") {
        previousValue -= currentValue;
        } else if (currentOperator === "x"){
        previousValue *= currentValue;
        } else if (currentOperator === "/") {
            previousValue /= currentValue;
        }

      currentDisplay.textContent = previousValue;
      previousDisplay.textContent = "";

      currentValue = "";
      currentOperator = "";
      
    }
    console.log (previousValue, currentOperator, currentValue);
}

function roundNum(num) {
    return Math.round(num * 10000) / 10000;
}

function handleDecimal () {
    if (!currentValue.includes(".")) {
        currentValue += ".";
    }
    currentDisplay.textContent = currentValue;
}