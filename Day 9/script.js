// Generate a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Validate the user's input
function validateInput(value) {
    if (value === "") {
        return "Please enter a number.";
    }

    const number = Number(value);

    if (isNaN(number)) {
        return "Please enter numbers only.";
    }

    if (number < 1 || number > 100) {
        return "Please enter a number between 1 and 100.";
    }

    return "";
}

// Check the user's guess
function checkGuess(guess, randomNumber) {
    if (guess > randomNumber) {
        return "Too High! Try a lower number.";
    }

    if (guess < randomNumber) {
        return "Too Low! Try a higher number.";
    }

    return "Correct Guess! You won!";
}

// Update the attempt counter
function updateAttempts() {
    attempts++;
    attemptsDisplay.textContent = attempts;
}

// Display feedback messages
function displayFeedback(message) {
    feedback.textContent = message;
}

// Reset the game
function resetGame() {
    randomNumber = generateRandomNumber();
    attempts = 0;

    guessInput.value = "";
    attemptsDisplay.textContent = "0";
    feedback.textContent = "Make your first guess!";
    gameStatus.textContent = "Playing";

    guessInput.disabled = false;
    submitButton.disabled = false;
}

// Variables
let randomNumber = generateRandomNumber();
let attempts = 0;

console.log("Correct Number:", randomNumber);
// DOM elements
const guessInput = document.getElementById("guessInput");
const submitButton = document.getElementById("submitGuess");
const resetButton = document.getElementById("resetGame");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const gameStatus = document.getElementById("gameStatus");

// Submit Guess button
submitButton.addEventListener("click", function () {

    const inputValue = guessInput.value;

    // Validate input
    const errorMessage = validateInput(inputValue);

    if (errorMessage !== "") {
        displayFeedback(errorMessage);
        return;
    }

    const guess = Number(inputValue);

    // Update attempts
    updateAttempts();

    // Check guess
    const result = checkGuess(guess, randomNumber);

    // Display result
    displayFeedback(result);

    // End game if correct
    if (guess === randomNumber) {
        gameStatus.textContent = "Game Over - You Won!";
        guessInput.disabled = true;
        submitButton.disabled = true;
    }
});

// Reset Game button
resetButton.addEventListener("click", resetGame);