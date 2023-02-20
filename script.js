let currentValue = "";
let previousValue = "";
let operator = "";

const currentDisplay = document.querySelector(".current");
const previousDisplay = document.querySelector(".previous");

const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");

let numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

numbers.forEach((num)=> num.addEventListener("click", (e)=> handleNumber(e.target.textContent)));
 

function handleNumber(num) {
    if(currentValue.length <= 9) {
        currentValue += num;
    }
    currentDisplay.textContent = currentValue;
}