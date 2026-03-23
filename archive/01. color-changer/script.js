document.addEventListener("DOMContentLoaded", () => {
    const bodyEl = document.body;
    const headings = document.querySelectorAll(".text");
    const panelWrapper = document.querySelector(".panel-wrapper");
    const buttons = document.querySelectorAll("[data-color-key]");

    const COLORS = {
        midnightBlue: "#0D1B2A",
        charcoalGray: "#2E2E2E",
        forestGreen: "#1B4332",
        burgundy: "#581845",
        darkSlate: "#2F4F4F",
        indigo: "#2E1A47",
        ivory: "#FFFFF0",
        skyBlue: "#A7C7E7",
        paleMint: "#C1E1C1",
        peach: "#FFDAB9",
        lavender: "#E6E6FA",
        lightGray: "#D3D3D3",
    };

    buttons.forEach((btn) => {
        const key = btn.dataset.colorKey;
        const colorHex = COLORS[key];

        btn.style.backgroundColor = colorHex;
    });

    function showHeadingColor(mode) {
        headings.forEach((heading) => {
            heading.classList.toggle("text-dark", mode == "light");
            heading.classList.toggle("text-light", mode == "dark");
        });
    }

    panelWrapper.addEventListener("click", (e) => {
        const button = e.target.closest("[data-color-key]");

        if (!button) return;

        const key = button.dataset.colorKey;
        const color = COLORS[key];

        bodyEl.style.backgroundColor = color;

        const parentPanel = button.closest(".panel");
        if (parentPanel?.classList.contains("dark-palette")) {
            showHeadingColor("light");
        } else if (parentPanel?.classList.contains("light-palette")) {
            showHeadingColor("dark");
        }
    });

    showHeadingColor("light");
});
