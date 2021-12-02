import { images } from "../App.hooks";
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
