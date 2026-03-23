document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const inputEl = document.querySelector("#input-value");
    const guessesEl = document.querySelector("#guessed-number");
    const triesEl = document.querySelector("#tries");
    const alerts = document.querySelector(".alerts");
    const submitBtn = document.querySelector("#sub-btn");
    const container = document.querySelector(".container");

    const resetBtn = document.createElement("button");
    resetBtn.id = "reset-btn";
    resetBtn.textContent = "Reset";

    let gameFinished = false;
    let guesses = [];
    let triesLeft = 10;
    let secretNumber = Math.floor(Math.random() * 101); // 0–100

    let alertTimeoutId = null;

    const updateGuessesDisplay = () => {
        guessesEl.textContent = guesses.join(", ");
    };

    const showAlert = (message, autoClear = true) => {
        alerts.textContent = message;
        if (!autoClear) return;

        if (alertTimeoutId) clearTimeout(alertTimeoutId);
        alertTimeoutId = setTimeout(() => {
            alerts.textContent = "";
            alertTimeoutId = null;
        }, 1500);
    };

    const endGame = (message) => {
        gameFinished = true;
        inputEl.disabled = true;
        submitBtn.disabled = true;
        submitBtn.style.cursor = "not-allowed";
        if (message) alerts.textContent = message;

        if (!resetBtn.isConnected) {
            container.appendChild(resetBtn);
            resetBtn.addEventListener("click", resetGame);
        }
    };

    const resetGame = () => {
        gameFinished = false;
        guesses = [];
        triesLeft = 10;
        secretNumber = Math.floor(Math.random() * 101);

        guessesEl.textContent = "";
        triesEl.textContent = triesLeft;
        alerts.textContent = "";
        inputEl.disabled = false;
        submitBtn.disabled = false;
        inputEl.value = "";
        submitBtn.style.cursor = "pointer";

        if (resetBtn.isConnected) {
            resetBtn.remove();
        }
    };

    const handleGuess = (value) => {
        if (value < 0 || value > 100) {
            showAlert("⚠️ Enter a number between 0 and 100.");
            return;
        }

        triesLeft--;
        triesEl.textContent = triesLeft;
        guesses.push(value);
        updateGuessesDisplay();

        if (value === secretNumber) {
            endGame("🎉 You guessed it right!");
            return;
        }

        if (triesLeft === 0) {
            endGame(`❌ No tries left! The number was ${secretNumber}.`);
            return;
        }

        if (value > secretNumber) {
            showAlert("🚀 Too high. Try again!");
        } else {
            showAlert("🚩 Too low. Try again!");
        }
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (gameFinished) return;

        const input = parseInt(inputEl.value, 10);
        inputEl.value = "";

        if (isNaN(input)) {
            showAlert("⚠️ Please enter a valid number!");
            return;
        }

        handleGuess(input);
    });
});
