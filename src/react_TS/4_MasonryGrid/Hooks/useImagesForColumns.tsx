import { images } from "../App.hooks";

// const columns = [[],[],[]]

// images 42

// colCount 3

// imgs % colCount = 0 | 1 | 2
// columns[moduloResult].push(img)

// img.reduce((agg, img, idx, refArr)=>{
//     ...
// }, [[],[],[]])

// for img in images
//     for id in colLenght
//         columns[id] = []

export const useImagesForColumns = (colCount: number) => {
    //NOTE: do poprawy
    const columns: string[][] = new Array(colCount).fill([]);
    // const columns: string[][] = [[], [], [], []];
    //TODO: reduce
    for (let img in images) {
        const numberImg: number = parseInt(img);
        const moduloResult = numberImg % colCount;
        columns[moduloResult].push(images[numberImg]);
    }
    return columns;
};
