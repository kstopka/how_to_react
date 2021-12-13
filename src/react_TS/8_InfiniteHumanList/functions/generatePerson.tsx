import { names, surnames, ages, sex } from "../data/data";
import { objPersonType } from "../App.d";

const randomItemFromArray = (array: any[]) => {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
};

export const generatePerson = () => {
    const objPerson: objPersonType = {
        name: randomItemFromArray(names),
        surname: randomItemFromArray(surnames),
        age: randomItemFromArray(ages),
        sex: randomItemFromArray(sex),
    };
    return objPerson;
};
