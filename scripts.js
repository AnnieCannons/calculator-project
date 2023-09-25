let screen = document.querySelector(".screen");
let numbers = document.querySelectorAll(".number-button");
//Add six separate variables for add, subtract, multiply, divide, clear button, and equals sign
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let clearButton = document.querySelector(".double");
let equalsSign = document.querySelector("#answer");
let goBack = document.querySelector("#go-back");

let valueOne = '';
let currentOperator = '';
let valueTwo = '';

add.addEventListener("click", function(){
    let content = add.textContent;
    currentOperator = content;
})

subtract.addEventListener("click", function(){
    let content = subtract.textContent;
    currentOperator = content;
})

multiply.addEventListener("click", function(){
    let content = multiply.textContent;
    currentOperator = content;
})

divide.addEventListener("click", function(){
    let content = divide.textContent;
    currentOperator = content;
})


for (let i = 0; i < numbers.length; i++ ) {
    numbers[i].addEventListener("click", function(){
        let content = numbers[i].textContent;
        if(currentOperator === "") {
            valueOne += content;
            screen.textContent = valueOne;
        } else{
            valueTwo += content;
            screen.textContent = valueTwo;
        }
    });
}

equalsSign.addEventListener("click", function(){
    let answer = doMath(valueOne, currentOperator, valueTwo);
    screen.textContent = answer;
})

function doMath(value1, operator, value2) {
    if (operator === "+") {
        return Number(value1) + Number(value2);
    } else if (operator === "-") {
        return Number(value1) - Number(value2);
    } else if (operator === "×") {
        return Number(value1) * Number(value2);
    } else if(operator === "÷") {
        return Number(value1) / Number(value2);
    }
}

clearButton.addEventListener("click", function(){
    valueOne = '';
    currentOperator = '';
    valueTwo = '';
    screen.textContent = "0"
}
)

goBack.addEventListener("click", function(){
    if(valueTwo.length > 1){
        valueTwo = valueTwo.slice(0,-1);
        screen.textContent = valueTwo;
    } else if(valueTwo.length === 1){
        valueTwo = "";
        screen.textContent = "0";
    } else if(currentOperator !== ""){
        currentOperator = ""
    } else if(valueOne.length > 1){
        valueOne = valueOne.slice(0,-1);
        screen.textContent = valueOne;
    } else if (valueOne.length === 1){
        valueOne = "";
        screen.textContent = "0";
    }
})