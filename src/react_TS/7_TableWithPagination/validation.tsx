export const validation = (elementsOnPage: number, actualPageIdx: number) => {
    if (isNaN(elementsOnPage) || isNaN(actualPageIdx)) {
        throw new Error("Value cant be NaN");
    }
    if (!Number.isInteger(elementsOnPage) || !Number.isInteger(actualPageIdx)) {
        throw new Error(`Value is not integer`);
    }
    if (actualPageIdx < 0) {
        throw new Error("index can not be negative number");
    }
};
