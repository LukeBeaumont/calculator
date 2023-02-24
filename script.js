let currentValue = "";
let previousValue = "";
let currentOperator = "";

const currentDisplay = document.querySelector(".current");
const previousDisplay = document.querySelector(".previous");

const clear = document.querySelector(".clear");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector(".equals");

let numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

clear.addEventListener("click", clearCalc);

equals.addEventListener("click", calculate);

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
}

function handleOperator(op) {
    currentOperator = op;
    previousValue = currentValue;
    previousDisplay.textContent = previousValue + " " + currentOperator;
    currentDisplay.textContent = "";
    currentValue = "";
    
}

function calculate() {
    currentValue = Number(currentValue);
    previousValue = Number(previousValue); 

   if(currentOperator === "+") {
        previousValue = currentValue += previousValue;
    } else if (currentOperator === "-") {
        previousValue = previousValue -= currentValue;
    } else if (currentOperator === "x"){
        previousValue = currentValue *= previousValue;
    } else previousValue = previousValue /= currentValue;

    currentDisplay.textContent = previousValue;
    previousDisplay.textContent = "";
}
