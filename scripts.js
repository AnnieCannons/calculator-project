// Variables
//HTML elements
let screenVariable = document.querySelector(".screen");
//Add six separate variables for add, subtract, multiply, divide, clear button, and equals sign
let addVariable = document.querySelector("#add");
let subtractVariable = document.querySelector("#subtract");
let multiplyVariable = document.querySelector("#multiply");
let divideVariable = document.querySelector("#divide");
let clearButtonVariable = document.querySelector("#clearButton");
let equals = document.querySelector("#answer");
let goBack = document.querySelector("#goBack");
//array of elements for each button that has a number 0-9
let numbers = document.querySelectorAll(".number-button");
//variables from the user
let valueOneFromUser = "";
let valueTwoFromUser = "";
let currentOperator = "";

//Event LIsteners

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
        //check to see if the user has entered an operator yet. If they have not, keep updating te valueOneFromUser, and display it to the user in the element saved in screenVariable.
        //if currentOperator === "", update the value of valueONeFromUser += content
        if (currentOperator === "") {
            valueOneFromUser += content;
            console.log(valueOneFromUser, "FIRST number");
            screenVariable.textContent = valueOneFromUser;
        } else {
            //add code to update valueTwoFromUser
            valueTwoFromUser += content;
            console.log(valueTwoFromUser, "SECOND number");
            screenVariable.textContent = valueTwoFromUser;
        }
    })
}

equals.addEventListener("click", function() { 
    // let answer = doMath(valueOneFromUser, currentOperator, valueTwoFromUser);
    let answer = doMath(valueOneFromUser, currentOperator, valueTwoFromUser);
    console.log(answer, "ANSWER");
    screenVariable.textContent = answer
})

//functions
function doMath(value1, operator, value2) {
    if (operator === "+") {
        return Number(value1) + Number(value2);
    } 
    if (operator === "-") {
        return Number(value1) - Number(value2);
    }
    if (operator === "×") {
        return Number(value1) * Number(value2);
    }
    if (operator === "÷") {
        return Number(value1) / Number(value2);
    }
}

clearButtonVariable.addEventListener("click", function() {
    valueOneFromUser = "";
    valueTwoFromUser = "";
    currentOperator = "";
    screenVariable.textContent = 0;
});

goBack.addEventListener("click", function(){
    if(valueTwoFromUser.length > 1){
        valueTwoFromUser = valueTwoFromUser.slice(0, -1)
        screenVariable.textContent= valueTwoFromUser;
    } else if(valueTwoFromUser.length === 1){
        valueTwoFromUser = ""
        screenVariable.textContent = "0"
    } else if(currentOperator !== ""){
        currentOperator = ""
    } else if(valueOneFromUser.length > 1){
        valueOneFromUser = valueOneFromUser.slice(0, -1)
        screenVariable.textContent = valueOneFromUser
    }  else if(valueOneFromUser.length === 1){
        valueOneFromUser = ""
        screenVariable.textContent="0"
    } 
});