import { handleInput } from "./input-handler.js";
import { isSpecial } from "./validators.js";
import { updateDisplay, setDisplayValue } from "./display.js";
import { groupEntries } from "./grouper.js";
import { evaluate } from "./evaluator.js";

const displayInput = document.querySelector("#display");
const buttonWrapper = document.querySelector(".button-container");

let entries = [];

buttonWrapper.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const key = btn.textContent;

    // Special keys (AC, DEL, =)
    if (isSpecial(key)) {
        if (key === "AC") {
            entries = [];
            updateDisplay(displayInput, key);
        }

        if (key === "DEL") {
            entries.pop();
            updateDisplay(displayInput, key);
        }

        if (key === "=") {
            const grouped = groupEntries(entries);
            const result = evaluate(grouped);

            setDisplayValue(displayInput, result);
            entries = [String(result)];
        }

        return;
    }

    // Normal inputs
    entries.push(key);
    updateDisplay(displayInput, key);
});
