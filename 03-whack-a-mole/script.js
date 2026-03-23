document.addEventListener("DOMContentLoaded", () => {
    const displayScore = document.querySelector("#total-score");
    const displayTime = document.querySelector("#time-left");
    const holes = document.querySelectorAll(".holes");
    const startBtn = document.querySelector(".start-btn");

    const GAME_DURATION = 30; // seconds
    const MOLE_INTERVAL = 650; // ms

    let timerId = null;
    let moleTimer = null;
    let score = 0;
    let currentTime = GAME_DURATION;

    const moleEmojis = ["😾", "🐶", "🦁", "🐺", "🐱‍👤"];

    const getRandomEl = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const updateTime = () => {
        displayTime.textContent = currentTime;
    };

    const updateScore = () => {
        displayScore.textContent = score;
    };

    const clearHoles = () => {
        holes.forEach((hole) => {
            hole.innerHTML = "";
            hole.onclick = null;
            hole.classList.remove("has-mole");
        });
    };

    const enableStartButton = () => {
        startBtn.disabled = false;
        startBtn.classList.remove("disabled");
    };

    const disableStartButton = () => {
        startBtn.disabled = true;
        startBtn.classList.add("disabled");
    };

    const endGame = () => {
        clearInterval(timerId);
        clearInterval(moleTimer);
        timerId = null;
        moleTimer = null;

        clearHoles();

        alert(`Game End. Your Score is ${score}`);

        score = 0;
        currentTime = GAME_DURATION;
        updateScore();
        updateTime();

        enableStartButton();
    };

    const timeLeft = () => {
        timerId = setInterval(() => {
            currentTime--;
            updateTime();

            if (currentTime === 0) {
                endGame();
            }
        }, 1000);
    };

    const handleClickOnMole = (hole) => {
        if (!hole.classList.contains("has-mole")) return;

        score++;
        updateScore();

        hole.innerHTML = "";
        hole.classList.remove("has-mole");
        hole.onclick = null;
    };

    const showRandomMole = () => {
        clearHoles();

        const randomHole = getRandomEl([...holes]);
        const mole = getRandomEl(moleEmojis);

        randomHole.innerHTML = `<span>${mole}</span>`;
        randomHole.classList.add("has-mole");
        randomHole.onclick = () => handleClickOnMole(randomHole);
    };

    const startGame = () => {
        if (timerId || moleTimer) return;

        score = 0;
        currentTime = GAME_DURATION;
        updateScore();
        updateTime();

        disableStartButton();
        timeLeft();
        showRandomMole();

        moleTimer = setInterval(showRandomMole, MOLE_INTERVAL);
    };

    startBtn.addEventListener("click", startGame);
});
