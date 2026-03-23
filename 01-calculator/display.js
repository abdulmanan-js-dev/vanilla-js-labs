export const updateDisplay = (input, key) => {
    if (key === "AC") {
        input.value = "0";
        return;
    }
    if (key === "DEL") {
        input.value = input.value.slice(0, -1) || "0";
        return;
    }

    if (input.value === "0" && key !== ".") {
        input.value = key;
    } else {
        input.value += key;
    }
};

export const setDisplayValue = (input, val) => {
    input.value = val;
};
