

let screenVariable = document.querySelector(".screen")
let number = document.querySelectorAll('.number-button ')
let division = document.querySelector('#divide')
let multiplication = document.querySelector('#multiply')
let subtraction = document.querySelector('#subtract')
let addition = document.querySelector('#add')
let answer = document.querySelector('#answer')
let empty = document.querySelector('#empty')
let backspace = document.querySelector('#go-back')

// user variables for input
let valueOneFromTheUser = ''
let valueTwoFromTheUser = ''
let currentOperator = ''

answer.addEventListener("click", function () {
    console.log(doMath(valueOneFromTheUser, currentOperator, valueTwoFromTheUser));
    screenVariable.textContent = doMath(valueOneFromTheUser, currentOperator, valueTwoFromTheUser)
})

// event listeners for operators (-,*,+,/)
division.addEventListener("click", function () {
    let content = division.textContent;
    currentOperator = content
})
multiplication.addEventListener("click", function () {
    let content = multiplication.textContent;
    currentOperator = content
})
subtraction.addEventListener("click", function () {
    let content = subtraction.textContent;
    currentOperator = content
})
addition.addEventListener("click", function () {
    let content = addition.textContent;
    currentOperator = content
})
empty.addEventListener("click", function () {
    screenVariable.textContent = 0
})

backspace.addEventListener("click", function () {
    //look at all possible scenarios and add functionality for each one
    // we go back through the possible scenarios, dealing with each one
    // if the second value is multiple digits, then lop the last digit off
    if (valueTwoFromTheUser.length > 1) {
        valueTwoFromTheUser = valueTwoFromTheUser.slice(0, -1);
        screenVariable.textContent = valueTwoFromTheUser;
        // if the value is single digit, make it no value and set the screen to 0
    } else if (valueTwoFromTheUser.length === 1) {
        valueTwoFromTheUser = "";
        screenVariable.textContent = "0";
        // if neither of those were true, then there is no second value, so we move on to the operator
        // if the operator is set, then set it to no value (going back to the first number)
    } else if (currentOperator !== "") {
        currentOperator = "";
        // if the operator was already no value, then we move on to the first number
        // if the first number is multiple digits, then lop the last digit off (and set the screen to the new value)
    } else if (valueOneFromTheUser.length > 1) {
        valueOneFromTheUser = valueOneFromTheUser.slice(0, -1);
        screenVariable.textContent = valueOneFromTheUser;
        // if the first number is single digit, make it no value and set the screen to 0
    } else if (valueOneFromTheUser.length === 1) {
        valueOneFromTheUser = "";
        screenVariable.textContent = "0";
    }
});


for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function () {
        let content = number[i].textContent
        if (currentOperator === "") {
            valueOneFromTheUser += content
            console.log(`${valueOneFromTheUser}, FIRST number`)
            screenVariable.textContent = valueOneFromTheUser
        } else {
            valueTwoFromTheUser += content
            console.log(`${valueTwoFromTheUser}, SECOND number`)
            screenVariable.textContent = valueTwoFromTheUser
        }
    })
}

function doMath(value1, operator, value2) {
    if (operator === "+") {
        return Number(value1) + Number(value2)
    } if (operator === "-") {
        return Number(value1) - Number(value2)
    } if (operator === "×") {
        return Number(value1) * Number(value2)
    } if (operator === "÷") {
        return Number(value1) / Number(value2)
    }

}
