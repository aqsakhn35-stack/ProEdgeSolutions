const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

const resetButton = document.getElementById("resetButton");

// Validate Email
function validateEmail() {
    const email = emailInput.value.trim();

    if (email === "") {
        emailError.textContent = "Email address is required.";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        return false;
    }

    emailError.textContent = "";
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");

    return true;
}

// Validate Password
function validatePassword() {
    const password = passwordInput.value;

    if (password === "") {
        passwordError.textContent = "Password is required.";
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        return false;
    }

    if (password.length < 8) {
        passwordError.textContent =
            "Password must contain at least 8 characters.";
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        return false;
    }

    passwordError.textContent = "";
    passwordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");

    return true;
}

// Submit Event
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailValid = validateEmail();
    const passwordValid = validatePassword();

    if (emailValid && passwordValid) {
        successMessage.textContent =
            "Login validation successful!";
        successMessage.style.display = "block";
    } else {
        successMessage.textContent = "";
        successMessage.style.display = "none";
    }
});

// Input Event
emailInput.addEventListener("input", function () {
    validateEmail();
});

passwordInput.addEventListener("input", function () {
    validatePassword();
});

// Focus Event
emailInput.addEventListener("focus", function () {
    emailInput.style.backgroundColor = "#fffaf5";
});

passwordInput.addEventListener("focus", function () {
    passwordInput.style.backgroundColor = "#fffaf5";
});

// Blur Event
emailInput.addEventListener("blur", function () {
    emailInput.style.backgroundColor = "";
    validateEmail();
});

passwordInput.addEventListener("blur", function () {
    passwordInput.style.backgroundColor = "";
    validatePassword();
});

// Click Event
resetButton.addEventListener("click", function () {
    emailError.textContent = "";
    passwordError.textContent = "";

    emailInput.classList.remove("invalid", "valid");
    passwordInput.classList.remove("invalid", "valid");

    successMessage.textContent = "";
    successMessage.style.display = "none";
});