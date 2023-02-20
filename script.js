let currentValue = "";
let previousValue = "";
let currentOperator = "";

const currentDisplay = document.querySelector(".current");
const previousDisplay = document.querySelector(".previous");

const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");

let numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

numbers.forEach((num)=> num.addEventListener("click", (e)=> handleNumber(e.target.textContent)));

operators.forEach((op) => op.addEventListener("click", (e)=> handleOperator(e.target.textContent)))
 
function handleNumber(num) {
    if(currentValue.length <= 9) {
        currentValue += num;
    }
    currentDisplay.textContent = currentValue;
}

function handleOperator(op) {
    currentOperator = op;
    currentDisplay.textContent = currentOperator;
    previousDisplay.textContent = currentValue;
    currentValue = "";
}