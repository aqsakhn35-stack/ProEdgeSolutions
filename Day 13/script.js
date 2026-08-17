// Select HTML elements
const firstNumberInput = document.querySelector("#num1");
const secondNumberInput = document.querySelector("#num2");
const resultElement = document.querySelector("#result");

const addButton = document.querySelector("#addBtn");
const subtractButton = document.querySelector("#subtractBtn");
const multiplyButton = document.querySelector("#multiplyBtn");
const divideButton = document.querySelector("#divideBtn");
const clearButton = document.querySelector("#clearBtn");

// Get numbers from input fields
const getNumbers = () => {
    const firstNumber = Number(firstNumberInput.value);
    const secondNumber = Number(secondNumberInput.value);

    return { firstNumber, secondNumber };
};

// Check input values
const validateInputs = () => {
    if (firstNumberInput.value === "" || secondNumberInput.value === "") {
        resultElement.textContent = "Please enter both numbers.";
        return false;
    }

    return true;
};

// Addition
const add = (a, b) => a + b;

// Subtraction
const subtract = (a, b) => a - b;

// Multiplication
const multiply = (a, b) => a * b;

// Division
const divide = (a, b) => {
    if (b === 0) {
        return null;
    }

    return a / b;
};

// Display result
const showResult = (operation, value) => {
    resultElement.textContent = `${operation} Result: ${value}`;
};

// Addition button
addButton.addEventListener("click", () => {
    if (!validateInputs()) return;

    const { firstNumber, secondNumber } = getNumbers();
    const result = add(firstNumber, secondNumber);

    showResult("Addition", result);
});

// Subtraction button
subtractButton.addEventListener("click", () => {
    if (!validateInputs()) return;

    const { firstNumber, secondNumber } = getNumbers();
    const result = subtract(firstNumber, secondNumber);

    showResult("Subtraction", result);
});

// Multiplication button
multiplyButton.addEventListener("click", () => {
    if (!validateInputs()) return;

    const { firstNumber, secondNumber } = getNumbers();
    const result = multiply(firstNumber, secondNumber);

    showResult("Multiplication", result);
});

// Division button
divideButton.addEventListener("click", () => {
    if (!validateInputs()) return;

    const { firstNumber, secondNumber } = getNumbers();
    const result = divide(firstNumber, secondNumber);

    if (result === null) {
        resultElement.textContent = "Cannot divide by zero.";
        return;
    }

    showResult("Division", result);
});

// Clear button
clearButton.addEventListener("click", () => {
    firstNumberInput.value = "";
    secondNumberInput.value = "";
    resultElement.textContent = "Enter numbers and select an operation.";
});