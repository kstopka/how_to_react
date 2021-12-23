import { names, surnames, ages, sex } from "../data/data";
import { objPersonType } from "../App.d";

const randomItemFromArray = (array: any[]) => {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
};

export const generatePerson = (id: number) => {
    const objPerson: objPersonType = {
        id,
        name: randomItemFromArray(names),
        surname: randomItemFromArray(surnames),
        age: randomItemFromArray(ages),
        sex: randomItemFromArray(sex),
    };
    return objPerson;
};
