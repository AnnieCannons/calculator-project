# Calculator Project

##### Many thanks to Brian Holt for creating this project!!

## Project Description

We are going to rebuild the calculator using JavaScript! If you're not a big calculator user, here is [our finished product](https://ac-calculator-solution.surge.sh/).

Let's go over the requirements:

1. Open the HTML file in your browser and take a look at the HTML and CSS files for the calculator.
2. Once you're done, the calculator should function like a normal calculator .
3. Do not implement % or .. You can assume everything will be an integer.
4. C means clear. When a user clicks it, it should clear everything and go back to the first state it was in when the page loaded.
5. Doing the back arrow is extra credit. It's like pressing backspace; it'll delete the last character typed. If it's clicked when there's only one digit, it sets the current number to be 0.
6. Don't worry about if the number is too long for the screen.
7. Calculators tend to have some special behavior when you hit equals: if you type another number it erases the results and starts over. Feel free to do that but also free free (like me) to just treat it normally and make the user hit C if they want to clear it.

Here are the features of our calculator, expressed as user stories:

- When loading or reloading the app, the user can see a display (the "screen") that starts with a 0 on it.
- The user can click a number key and see the number on the screen, replacing the initial 0.
- The user can enter multi-digit numbers on the keypad and see them on the screen.
- The user can enter a number, `+`, another number, then `=` and see the correct addition result.
- The user can enter a number, `-`, another number, then `=` and see the correct subtraction result.
- The user can enter a number, `x`, another number, then `=` and see the correct multiplication result.
- The user can enter a number, `÷`, another number, then `=` and see the correct division result _rounded to the nearest integer_.
- When the user clicks the clear key, the number on the screen is removed.
- When the user clicks the clear key, they see a default number `0` on the screen.
- When the user clicks the clear key during a calculation in progress, the full state is reset—when they push `=`, the screen should still say `0`.

You can see [a deployed version of the app here](https://ac-calculator-solution.surge.sh/) to get a sense of how it should work.

## Setup

1. Fork and clone this repository.
2. Run Live Server in VS Code to see the app in the browser.
3. Add a script tag to the HTML file. Don't forget the `defer` attribute!

## General Steps

#### Track The State Of The Calculator

Either create multiple variables to track the state of the calculator, or create an object to track them all in one place.

What will you need to track? Think about it before reading on!

- The current number being typed in
- The previous number (if there was one)
- The current operation (if there is one)
- The result of the operation (if there is one)
- Whether the user has just clicked an operation button
- Whether the user has just clicked the equals button

#### Query The DOM

You'll need to query the DOM for the following elements:

- The screen
- The buttons

#### Add Event Listeners

You'll need to add event listeners to the buttons. Preferably, you'll add the same event listener to each button.

#### Handle Clicks

When a button is clicked, you'll need to do something with the button that was clicked. You'll need to figure out what to do based on the button that was clicked.

To do this, you'll need to know what the button was. You can get this from each button element's properties.

#### Check The Values Of The Buttons

Some kind of branching logic will be needed to handle the different types of buttons. You'll need to check the value of the button to figure out what to do.

#### Handle The Number Buttons First

When a number button is clicked, you'll have to update either the first number or the second number, depending on if an operator has been pressed. You'll also have to update the screen to match.

#### Handle The Operator Buttons

When an operator button is clicked, you'll have to update the operator and the screen. You'll also have to update the state of the calculator to indicate that an operator has been pressed.

#### Handle The Equals Button

When the equals button is clicked, you'll have to do the math and update the screen. You'll also have to update the state of the calculator to indicate that the equals button has been pressed.

#### Handle The Clear Button

When the clear button is clicked, you'll have to reset the state of the calculator and update the screen.

#### Handle The Back Button

When the back button is clicked, you'll have to remove the last digit from the current number and update the screen.

#### Refactor

Once you have the calculator working, you can refactor your code to make it more readable and DRY.

A great suggestion is to create functions just to make sure your branching code doesn't get too busy!

#### Stretch Goals

- If the number entered is too long for the screen, adding any more digits does nothing to the display, and any calculation will only work with the number displayed.
- Once the number is longer than 3 digits, commas are inserted after every 3 digits. For example, instead of `11365`, it should be displayed as `11,365`, and `5456328` should be displayed as `5,456,328`.
- If the user attempts to divide by zero, "ERROR" is printed, and the calculator can handle further calculations without reload.
- The user can chain together the same operand. For example, if they type a number, then `+`, then another number, then `+`, then another number, then `=`, they will see all those numbers added together.
- The user can chain together multiple, different operands. For example, if they type a number, then `+`, then another number, then `-`, then another number, then `=`, they will see the result of the first two numbers added, then the third number subtracted from that total.
- When chaining operands, with every operand pressed, the user sees the running total displayed.
