/* DOM elements */
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const decimalButton = document.querySelector(".decimal-button");
const equalButton = document.querySelector(".equal-button");
const clearButton = document.querySelector(".clear-button");
const deleteButton = document.querySelector(".delete-button");
const inputDisplayNumber = document.querySelector(".input-display");
const resultDisplayNumber = document.querySelector(".result-display");

/*  Event listeners */
numberButtons.forEach((btn) =>
    btn.addEventListener("click", () => appendNumberScreen(btn.textContent))
);

operatorButtons.forEach((btn) =>
    btn.addEventListener("click", () => setOperation(btn.textContent))
);

clearButton.addEventListener("click", clearDisplay);
deleteButton.addEventListener("click", deleteNumber);
decimalButton.addEventListener("click", appendDecimal);
equalButton.addEventListener("click", evaluate);

/* Functions */
function appendNumberScreen(number) {
    if (inputDisplayNumber.textContent === "0") {
        inputDisplayNumber.textContent = ""; // Removes leading 0
    }
    inputDisplayNumber.textContent += number;
}

function clearDisplay() {
    inputDisplayNumber.textContent = "0";
    resultDisplayNumber.textContent = "";
}

function deleteNumber() {
    inputDisplayNumber.textContent = inputDisplayNumber.textContent.slice(
        0,
        -1
    );
    if (inputDisplayNumber.textContent.length === 0) {
        clearDisplay(); // If all values are deleted, value is set to 0
    }
}

function appendDecimal() {
    if (inputDisplayNumber.textContent.includes(".")) {
        return; // Prevents multiple being added
    }
    inputDisplayNumber.textContent += ".";
}

function setOperation(operator) {
    firstOperand = inputDisplayNumber.textContent;
    currentOperator = operator;
    inputDisplayNumber.textContent = `${firstOperand}${currentOperator}`;
}

function evaluate() {
    secondOperand = inputDisplayNumber.textContent.split("-");
    secondOperand = secondOperand[1];
    resultDisplayNumber.textContent = operate(
        currentOperator,
        firstOperand,
        secondOperand
    );
    // Currently only works for -, escape needed for regex
    // Evaulation doesn't work for multiple calcs (17-5-3, currently doesn't work)
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
