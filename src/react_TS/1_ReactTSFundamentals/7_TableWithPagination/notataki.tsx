export interface ISettings {
    actualPageIdx: number;
    entriesOnPage: number;
}

const dataEntries: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const settings: ISettings = {
    actualPageIdx: 5,
    entriesOnPage: 3,
};

const paginateArray = (dataEntries: Array<number>, settings: ISettings): Array<number> => {
    let { entriesOnPage, actualPageIdx } = settings;

    if (isNaN(entriesOnPage) || isNaN(actualPageIdx)) {
        throw new Error("Value cant be NaN");
    }

    if (!Number.isInteger(entriesOnPage) || !Number.isInteger(actualPageIdx)) {
        throw new Error(`Value is not integer`);
    }

    if (actualPageIdx === 0) {
        throw new Error("Nie ma strony o numerze 0");
    }
    if (actualPageIdx < 0) {
        throw new Error("Nie ma minusowych storn");
    }

    if (entriesOnPage === 0) {
        throw new Error(" Minimalna wartość strony to 1");
    }
    if (entriesOnPage < 0) {
        throw new Error("Wartość storny musi być większa od 0 ");
    }

    const multiplicationSettings: number = actualPageIdx * entriesOnPage;
    const indexToStartSlice: number = multiplicationSettings - entriesOnPage;

    if (indexToStartSlice >= dataEntries.length) {
        console.log(`ponad ostatnia strona`);
        const entriesOnLastPage: Array<number> = dataEntries.slice(
            indexToStartSlice - multiplicationSettings + dataEntries.length,
            dataEntries.length
        );
        return entriesOnLastPage;
    }

    const entriesOnSelectedPage: Array<number> = dataEntries.slice(indexToStartSlice, multiplicationSettings);
    return entriesOnSelectedPage;
};

console.log(paginateArray(dataEntries, settings));
