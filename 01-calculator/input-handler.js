import { isNumber, isOperator, isSpecial } from "./validators.js";

export const handleInput = (arr, key) => {
    if (isNumber(key) || isOperator(key)) {
        arr.push(key);
    }

    if (isSpecial(key)) {
        return;
    }
};
