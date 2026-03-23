export const groupEntries = (entries) => {
    const grouped = [];
    let number = "";

    for (let key of entries) {
        if (!isNaN(key) || key === ".") {
            number += key;
        } else {
            if (number) grouped.push(number);
            grouped.push(key);
            number = "";
        }
    }

    if (number) grouped.push(number);

    return grouped;
};
