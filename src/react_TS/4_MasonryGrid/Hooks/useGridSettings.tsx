import { images } from "../App.hooks";

const counterOfColumns = (width: number) => {
    if (width >= 1200) {
        const numberOfAllColumns = 4;
        return numberOfAllColumns;
    } else if (width <= 600) {
        const numberOfAllColumns = 1;
        return numberOfAllColumns;
    }
    const numberOfAllColumns = 2;
    return numberOfAllColumns;
};

export const useGridSettings = (width: number) => {
    const numberOfImages: number = images.length;
    const numberOfAllColumns: number = counterOfColumns(width);
    const numberOfRows: number = Math.ceil(numberOfImages / numberOfAllColumns);
    return { numberOfImages, numberOfAllColumns, numberOfRows };
};
