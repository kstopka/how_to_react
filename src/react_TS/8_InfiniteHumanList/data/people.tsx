import { generatePerson } from "../functions/generatePerson";
import { objPersonType } from "../App.d";

const fillArrayOfPeople = (numersOfPeople: number) => {
    const data = [];
    let number = 1;
    while (number <= numersOfPeople) {
        data.push(generatePerson());
        number++;
    }
    return data;
};

export const people: objPersonType[] = fillArrayOfPeople(100);
