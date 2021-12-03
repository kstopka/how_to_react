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

export const imagesForColumns = (numberOfImages: number, numberOfAllColumns: number, numberOfColumn: number) => {
    const array: string[] = images.filter((item, index) => {
        for (let i = numberOfColumn; i <= numberOfImages; i += numberOfAllColumns) {
            if (i === index) {
                return item;
            }
        }
    });
    return array;
};
