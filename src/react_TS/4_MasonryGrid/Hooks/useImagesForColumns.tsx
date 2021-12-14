import { images } from "../App.hooks";

export const useImagesForColumns = (colCount: number) => {
    //NOTE: dalej źle jest ;x

    // let columns: string[][] = new Array(colCount).fill([]);
    //console po reduce
    //(4) [Array(20), Array(20), Array(20), Array(20)]

    let columns: string[][] = [[], [], [], []];
    //console po reduce
    //(4) [Array(5), Array(5), Array(5), Array(5)]

    columns = images.reduce((accumulator: string[][], currentValue: string, index: number) => {
        const moduloResult = index % colCount;
        accumulator[moduloResult].push(currentValue);
        return accumulator;
    }, columns);
    console.log(columns);
    return columns;
};
// const columns: string[][] =
// for (let img in images) {
//     const numberImg: number = parseInt(img);
//     const moduloResult = numberImg % colCount;
//     columns[moduloResult].push(images[numberImg]);
// }
