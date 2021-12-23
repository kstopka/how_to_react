import { generatePerson } from "../functions/generatePerson";
import { objPersonType, fillArrayOfPeopleType } from "../App.d";

export const fillArrayOfPeople: fillArrayOfPeopleType<objPersonType> = (numersOfPeople, data = []) => {
    let number = 1;
    while (number <= numersOfPeople) {
        data.push(generatePerson(number));
        number++;
    }
    return data;
};

export const people: objPersonType[] = fillArrayOfPeople(100);
