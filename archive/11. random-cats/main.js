document.addEventListener("DOMContentLoaded", () => {
    const catName = document.querySelector("#cat-name");
    const catDescription = document.querySelector("#description");
    const catImage = document.querySelector("#cat-image");
    const nextBtn = document.querySelector("#next-cat-btn");

    const url = "https://api.freeapi.app/api/v1/public/cats/cat/random";
    const options = {
        method: "GET",
        headers: { accept: "application/json" },
    };

    const renderCatData = (data) => {
        catImage.src = data.image;
        catName.textContent = data.name;
        catDescription.textContent = data.description;
    };

    const getRandomCat = async () => {
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            renderCatData(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    nextBtn.addEventListener("click", getRandomCat);
    
    getRandomCat();
});
