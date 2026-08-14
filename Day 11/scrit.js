let counter = 0;

const counterValue = document.getElementById("counterValue");
const status = document.getElementById("status");
const message = document.getElementById("message");

const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

function updateCounter() {
    counterValue.textContent = counter;

    if (counter > 0) {
        status.textContent = "Counter is positive";
        counterValue.style.color = "green";
    } else if (counter < 0) {
        status.textContent = "Counter is negative";
        counterValue.style.color = "red";
    } else {
        status.textContent = "Counter is zero";
        counterValue.style.color = "black";
    }
}

incrementBtn.addEventListener("click", function () {
    counter = counter + 1;
    message.textContent = "Counter increased by 1";
    updateCounter();
});

decrementBtn.addEventListener("click", function () {
    counter = counter - 1;
    message.textContent = "Counter decreased by 1";
    updateCounter();
});

resetBtn.addEventListener("click", function () {
    counter = 0;
    message.textContent = "Counter reset successfully";
    updateCounter();
});

updateCounter();