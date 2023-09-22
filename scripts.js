// Variables
//HTML elements
let screenVariable = document.querySelector(".screen");
let numbers = document.querySelectorAll(".number-button");
console.log(numbers);

//Add six separate variables for add, subtract, multiply, divide, clear button, and equals sign
let addVariable = document.querySelector("#add");
console.log(addVariable);
let subtractVariable = document.querySelector("#subtract");
console.log(subtractVariable);
let multiplyVariable = document.querySelector("#multiply");
console.log(multiplyVariable);
let divideVariable = document.querySelector("#divide");
console.log(divideVariable);
let clearButtonVariable = document.querySelector("#clearButton");
console.log(clearButtonVariable);
let equals = document.querySelector("#equals");
console.log(equals);
let goBack = document.querySelector("#goBack");
console.log(goBack);

//variables from the user
let valueOneFromUser = "";
let valueTwoFromUser = "";
let currentOperator = "";

//Event LIsteners
equals.addEventListener("click", function() { 
    let answer = doMath(valueOneFromUser, currentOperator, valueTwoFromUser);
    console.log(answer, "ANSWER")
    screenVariable.textContent = answer;
})
//add event listeners to out operators (+, -, *, /)
addVariable.addEventListener("click", function() {
    let content = add.textContent;
    currentOperator = content;
})

subtractVariable.addEventListener("click", function() {
    let content = subtract.textContent;
    currentOperator = content;
})

multiplyVariable.addEventListener("click", function() {
    let content = multiply.textContent;
    currentOperator = content;
})

divideVariable.addEventListener("click", function() {
    let content = divide.textContent;
    currentOperator = content;
})

//adding event listeners to each item in the numbers array (all of the buttons that are numbers)
//loop over the numbers array and for each item add an event listener whose function console.log("clicked")
for (let i = 0; i <numbers.length; i++ ) {
    numbers[i].addEventListener("click", function() {
        let content = numbers[i].textContent;
        //if currentOperator === "", update the value of valueONeFromUser += content
        if (currentOperator === "") {
            valueOneFromUser += content;
            console.log(valueOneFromUser, "FIRST number");
            screenVariable.textContent = valueOneFromUser;
        } else {
            valueTwoFromUser += content;
            console.log(valueTwoFromUser, "SECOND number");
            screenVariable.textContent = valueTwoFromUser;
        }
    })
}

//functions
function doMath(value1, operator, value2){
    if (operator === "+") {
        return Number(value1) + Number(value2);
    }

}