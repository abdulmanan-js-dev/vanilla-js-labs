import {
    addition,
    subtract,
    multiply,
    division,
    percentage,
} from "./arithmetic-operations.js";

export const evaluate = (tokens) => {
    if (tokens.length < 3) return tokens[0];

    const a = Number(tokens[0]);
    const op = tokens[1];
    const b = Number(tokens[2]);

    switch (op) {
        case "+":
            return addition(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return division(a, b);
        case "%":
            return percentage(a, b);
        default:
            return "Error";
    }
};
