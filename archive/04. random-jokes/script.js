document.addEventListener("DOMContentLoaded", () => {
    const displayJokes = document.querySelector("#jokes-display");
    const getJokesBtn = document.querySelector("#get-jokes-btn");

    async function getRandomJokes() {
        try {
            displayJokes.textContent = "Loading joke...";
            const res = await fetch(
                "https://sv443.net/jokeapi/v2/joke/Any?type=single"
            );
            const data = await res.json();
            displayJokes.textContent = data.joke;
        } catch (error) {
            displayJokes.textContent = "Oops! Couldn't load a joke 😅";
            console.error(error);
        }
    }

    getJokesBtn.addEventListener("click", () => {
        getRandomJokes();
    });
});
