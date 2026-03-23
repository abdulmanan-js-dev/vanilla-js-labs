document.addEventListener("DOMContentLoaded", () => {
    const userChoice = document.querySelector("#user-choice");
    const computerChoice = document.querySelector("#computer-choice");
    const winnerMessage = document.querySelector("#winner-message");
    const buttonContainer = document.querySelector(".all-buttons");

    const choices = {
        rock: "Rock",
        paper: "Paper",
        scissors: "Scissors",
    };

    const rules = {
        Rock: "Scissors",
        Paper: "Rock",
        Scissors: "Paper",
    };

    let setUserChoice = null;
    let setComputerChoice = null;
    let timerId = null;

    function userSelection(selection) {
        const userValue = choices[selection];
        setUserChoice = userValue;
        userChoice.textContent = userValue;

        randomComputerChoice();
    }

    function randomComputerChoice() {
        const keys = Object.keys(choices);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const randomValue = choices[randomKey];

        setComputerChoice = randomValue;
        computerChoice.textContent = randomValue;

        compareResults();
    }

    function compareResults() {
        if (setUserChoice === setComputerChoice) {
            showMessage("Game tied. Try again!");
        } else if (rules[setUserChoice] === setComputerChoice) {
            showMessage("You Won. Congratulations!");
        } else {
            showMessage("You Lose, Computer Wins.");
        }
    }

    function showMessage(text) {
        if (timerId) clearTimeout(timerId);
        winnerMessage.textContent = text;

        timerId = setTimeout(clearChoices, 3500);
    }

    function clearChoices() {
        userChoice.textContent = "-";
        computerChoice.textContent = "-";
        winnerMessage.textContent = "";
    }

    buttonContainer.addEventListener("click", (event) => {
        const button = event.target.closest("[data-inner-value]");
        if (!button) return;

        const key = button.dataset.innerValue;
        userSelection(key);
    });
});
