import { images } from "../App.hooks";

export const useImagesForColumns = (colCount: number) => {
    const columns: string[][] = [...new Array(colCount)].map(() => []);
    // let columns: string[][] = new Array(colCount).fill("").map(() => []);

    const result = images.reduce((accumulator, currentValue, index) => {
        const moduloResult = index % colCount;
        accumulator[moduloResult].push(currentValue);
        return accumulator;
    }, columns);
    return result;
};
