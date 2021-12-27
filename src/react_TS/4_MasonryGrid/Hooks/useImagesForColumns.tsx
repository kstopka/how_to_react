import { images } from "../App.hooks";

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
        // console.log("nowy_______________________________________________________________");
        // console.log(moduloResult);
        // console.log("curr");
        // console.log(currentValue);
        // console.log("acc: ");
        // console.log(accumulator);
        // console.log("columns");
        // console.log(columns);
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
