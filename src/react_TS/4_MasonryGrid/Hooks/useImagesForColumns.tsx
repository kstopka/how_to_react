import { images } from "../App.hooks";

export const useImagesForColumns = (colCount: number) => {
    let columns: string[][] = new Array(colCount).fill("").map(() => []);

    const result = images.reduce((accumulator, currentValue, index) => {
        const moduloResult = index % colCount;
        accumulator[moduloResult].push(currentValue);
        return accumulator;
    }, columns);

    console.log(result);

    return columns;
};
