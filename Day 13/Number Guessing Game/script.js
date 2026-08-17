const guessInput = document.querySelector("#guessInput");
const guessButton = document.querySelector("#guessBtn");
const resetButton = document.querySelector("#resetBtn");
const messageElement = document.querySelector("#message");
const attemptsElement = document.querySelector("#attempts");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

// Display game message
const showMessage = (message) => {
    messageElement.textContent = message;
};

// Check the player's guess
const checkGuess = () => {
    if (gameOver) {
        showMessage("Game over! Start a new game.");
        return;
    }

    const guessValue = guessInput.value;

    if (guessValue === "") {
        showMessage("Please enter a number.");
        return;
    }

    const guess = Number(guessValue);

    if (guess < 1 || guess > 100) {
        showMessage("Please enter a number between 1 and 100.");
        return;
    }

    attempts++;
    attemptsElement.textContent = attempts;

    if (guess === secretNumber) {
        showMessage(
            `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`
        );

        gameOver = true;
        return;
    }

    if (guess > secretNumber) {
        showMessage("Too high! Try a smaller number.");
    } else {
        showMessage("Too low! Try a larger number.");
    }

    guessInput.value = "";
};

// Start a new game
const resetGame = () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;

    attemptsElement.textContent = "0";
    guessInput.value = "";

    showMessage("New game started! Make your first guess.");
};

guessButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);