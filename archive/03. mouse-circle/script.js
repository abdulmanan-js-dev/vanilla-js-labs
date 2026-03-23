document.addEventListener("DOMContentLoaded", () => {
    function getRandomColor() {
        const colors = ["#ff4d6d", "#4dff6d", "#4dc3ff", "#ffeb4d", "#ff8c4d"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    document.body.addEventListener("click", (e) => {
        const radius = 35; // half of circle size
        const circle = document.createElement("div");
        circle.classList.add("circle-div");

        // Set position
        circle.style.left = `${e.clientX - radius}px`;
        circle.style.top = `${e.clientY - radius}px`;

        // Random color
        circle.style.backgroundColor = getRandomColor();

        document.body.appendChild(circle);

        // Trigger animation
        setTimeout(() => {
            circle.classList.add("grow-fade");
        }, 10);

        // Remove after animation
        setTimeout(() => {
            circle.remove();
        }, 610);
    });
});
