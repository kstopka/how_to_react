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

export const imagesForColumns = (numberOfImages: number, colCount: number) => {
    const columns = Array(colCount).fill([]);
    // const columns = [[], [], [], []];
    for (let img in images) {
        const numberImg: number = parseInt(img);
        const moduloResult = numberImg % colCount;
        //NOTE: polecenie poniżej wypełnia wszystkie tablice zamiast wybranej ???
        columns[moduloResult].push(images[numberImg]);
        // console.log(`index ${numberImg} =====> img ${images[numberImg]} `);
        // console.log(`columna ${moduloResult} =====> columna ${columns[moduloResult]}`);
        // console.log("");
    }
    return columns;
};

// export const imagesForColumns = (numberOfImages: number, numberOfAllColumns: number, numberOfColumn: number) => {
//     const array: string[] = images.filter((item, index) => {
//         for (let i = numberOfColumn; i <= numberOfImages; i += numberOfAllColumns) {
//             if (i === index) {
//                 return item;
//             }
//         }
//     });
//     return array;
// };
