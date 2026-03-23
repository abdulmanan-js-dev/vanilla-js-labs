document.addEventListener("DOMContentLoaded", () => {
    const letterEl = document.querySelector(".key-letter");
    const keyContainer = document.querySelector(".key-container");

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const DEFAULT_BG = "#313131";
    const CORRECT_BG = "darkgreen";
    const WRONG_BG = "red";

    let flashTimeoutId = null;

    const chooseLetter = () => {
        const index = Math.floor(Math.random() * alphabet.length);
        letterEl.textContent = alphabet[index];
    };

    const flashBackground = (isCorrect) => {
        // Clear previous timeout so multiple fast keypresses don't fight each other
        if (flashTimeoutId) {
            clearTimeout(flashTimeoutId);
            flashTimeoutId = null;
        }

        keyContainer.style.backgroundColor = isCorrect ? CORRECT_BG : WRONG_BG;

        flashTimeoutId = setTimeout(() => {
            keyContainer.style.backgroundColor = DEFAULT_BG;
            flashTimeoutId = null;
        }, 500);
    };

    document.addEventListener("keydown", (event) => {
        const key = event.key.toUpperCase();

        // Ignore keys that are not A–Z
        if (!alphabet.includes(key)) return;

        const currentLetter = letterEl.textContent;

        if (key === currentLetter) {
            flashBackground(true);
            chooseLetter();
        } else {
            flashBackground(false);
        }
    });

    // Initialize with a random letter
    chooseLetter();
});
