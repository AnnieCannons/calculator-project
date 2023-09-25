let screenVariable = document.querySelector(".screen");
let numbers = document.querySelectorAll(".number-button");
let equals = document.querySelector("#answer");
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let clear = document.querySelector("#clear");
let goBack = document.querySelector("#go-back");

let valueOneFromUser = "";
let valueTwoFromUser = "";
let currentOperator = "";

for(let i=0; i<numbers.length; i++) { 
numbers[i].addEventListener("click", function() {
let content = numbers[i].textContent;
if(currentOperator === "") {
valueOneFromUser += content;
screenVariable.textContent = valueOneFromUser
} else {
    valueTwoFromUser += content;
    screenVariable.textContent = valueTwoFromUser
}
})
};

equals.addEventListener("click", function() {
    let answer = doMath(valueOneFromUser, currentOperator, valueTwoFromUser);
    screenVariable.textContent = answer
});

add.addEventListener("click", function() {
    let content = add.textContent
    currentOperator = content;
});

subtract.addEventListener("click", function() {
    let content = subtract.textContent
    currentOperator = content;
});

multiply.addEventListener("click", function() {
    let content = multiply.textContent
    currentOperator = content;
});

divide.addEventListener("click", function() {
    let content = divide.textContent
    currentOperator = content;
});

clear.addEventListener("click", function() {
valueOneFromUser = ""
valueTwoFromUser = ""
currentOperator = ""
screenVariable.textContent = 0
});

goBack.addEventListener("click", function(){
    if(valueOneFromUser.length>1){
        valueOneFromUser = valueOneFromUser.slice(0, -1)
        screenVariable.textContent=valueOneFromUser
    } else if(valueOneFromUser.length===1){
        valueOneFromUser=""
        screenVariable.textContent="0"
    }

    if(valueTwoFromUser.length>1){
        valueTwoFromUser = valueTwoFromUser.slice(0, -1)
        screenVariable.textContent=valueTwoFromUser
    } else if(valueTwoFromUser.length===1){
        valueTwoFromUser=""
        screenVariable.textContent="0"
    }
})

function doMath(value1, operator, value2){
    if(operator === "+") {
        return Number(value1) + Number(value2) 
    } else if(operator === "-") {
        return Number(value1) - Number(value2) 
    } else if(operator === "*") {
        return Number(value1) * Number(value2) 
    } else {
        return Number(value1) / Number(value2)
    }
}

