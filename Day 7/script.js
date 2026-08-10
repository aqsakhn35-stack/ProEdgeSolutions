// Get HTML elements using DOM
const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const resultDisplay = document.getElementById("result");

// Function to get and validate numbers
function getNumbers() {
    let firstNumber = firstNumberInput.value;
    let secondNumber = secondNumberInput.value;

    // Prevent empty inputs
    if (firstNumber === "" || secondNumber === "") {
        resultDisplay.textContent = "Please enter both numbers.";
        return null;
    }

    // Convert string input into numbers
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    // Handle invalid values
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        resultDisplay.textContent = "Please enter valid numbers.";
        return null;
    }

    return {
        first: firstNumber,
        second: secondNumber
    };
}

// Addition
function addNumbers() {
    const numbers = getNumbers();

    if (numbers === null) {
        return;
    }

    let result = numbers.first + numbers.second;
    resultDisplay.textContent = result;
}

// Subtraction
function subtractNumbers() {
    const numbers = getNumbers();

    if (numbers === null) {
        return;
    }

    let result = numbers.first - numbers.second;
    resultDisplay.textContent = result;
}

// Multiplication
function multiplyNumbers() {
    const numbers = getNumbers();

    if (numbers === null) {
        return;
    }

    let result = numbers.first * numbers.second;
    resultDisplay.textContent = result;
}

// Division
function divideNumbers() {
    const numbers = getNumbers();

    if (numbers === null) {
        return;
    }

    // Prevent division by zero
    if (numbers.second === 0) {
        resultDisplay.textContent = "Cannot divide by zero.";
        return;
    }

    let result = numbers.first / numbers.second;
    resultDisplay.textContent = result;
}

// Modulus
function modulusNumbers() {
    const numbers = getNumbers();

    if (numbers === null) {
        return;
    }

    // Prevent modulus by zero
    if (numbers.second === 0) {
        resultDisplay.textContent = "Cannot calculate modulus by zero.";
        return;
    }

    let result = numbers.first % numbers.second;
    resultDisplay.textContent = result;
}

// Reset calculator
function resetCalculator() {
    firstNumberInput.value = "";
    secondNumberInput.value = "";
    resultDisplay.textContent = "0";
}