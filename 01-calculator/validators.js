export const isOperator = (key) => ["+", "-", "*", "/", "%"].includes(key);

export const isSpecial = (key) => ["AC", "DEL", "="].includes(key);

export const isNumber = (key) => !isNaN(key) || key === ".";
