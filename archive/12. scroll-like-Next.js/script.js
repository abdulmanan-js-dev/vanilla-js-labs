const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;

    const percent = (scrollTop / (docHeight - winHeight)) * 100;

    progressBar.style.width = `${percent}%`;
});
