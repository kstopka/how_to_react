import { images } from "../App.hooks";
const testImages = [
    "Element 1",
    "Element 2",
    "Element 3",
    "Element 4",
    "Element 5",
    "Element 6",
    "Element 7",
    "Element 8",
    "Element 9",
    "Element 10",
    "Element 11",
    "Element 12",
    "Element 13",
    "Element 14",
    "Element 15",
    "Element 16",
    "Element 17",
    "Element 18",
    "Element 19",
    "Element 20",
];

// const colCount = 4

export const useImagesForColumns = (colCount: number) => {
    //NOTE: dalej źle jest ;x

    let columns: string[][] = new Array(colCount).fill([]);
    //console po reduce
    //(4) [Array(20), Array(20), Array(20), Array(20)]

    // let columns: string[][] = [[], [], [], []];
    //console po reduce
    //(4) [Array(5), Array(5), Array(5), Array(5)]

    const result = images.reduce((accumulator, currentValue, index) => {
        const moduloResult = index % colCount; // 0 % 4 === 0
        accumulator[moduloResult].push(currentValue);
        return accumulator;
    }, columns);

    console.log(result);

    return columns;
};
// const columns: string[][] =
// for (let img in images) {
//     const numberImg: number = parseInt(img);
//     const moduloResult = numberImg % colCount;
//     columns[moduloResult].push(images[numberImg]);
// }
