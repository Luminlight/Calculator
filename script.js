const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const decimalButton = document.querySelector(".decimal-button");
const equalButton = document.querySelector(".equal-button");
const clearButton = document.querySelector(".clear-button");
const deleteButton = document.querySelector(".delete-button");
const displayNumber = document.querySelector(".display");

// Event listeners
numberButtons.forEach((btn) =>
    btn.addEventListener("click", () => appendNumberScreen(btn.textContent))
);

operatorButtons.forEach((btn) =>
    btn.addEventListener("click", () => console.log(btn.textContent))
);

clearButton.addEventListener("click", clearDisplay);
deleteButton.addEventListener("click", deleteNumber);
decimalButton.addEventListener("click", appendDecimal);
equalButton.addEventListener("click", () => {
    displayNumber.textContent = displayNumber.textContent;
    // Probably need to have/add another display
    // Pressing this button displays a "new" number
});

// Functions
function appendNumberScreen(number) {
    if (displayNumber.textContent === "0") {
        displayNumber.textContent = ""; // Removes leading 0
    }
    displayNumber.textContent += number;
}

function clearDisplay() {
    displayNumber.textContent = "0";
}

function deleteNumber() {
    displayNumber.textContent = displayNumber.textContent.slice(0, -1);
    if (displayNumber.textContent.length === 0) {
        clearDisplay(); // If all values are deleted, value is set to 0
    }
}

function appendDecimal() {
    if (displayNumber.textContent.includes(".")) {
        return; // Prevents multiple being added
    }
    displayNumber.textContent += ".";
}

const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}
