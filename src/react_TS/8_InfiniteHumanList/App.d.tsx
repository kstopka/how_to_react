export type objPersonType = {
    name: string;
    surname: string;
    age: number;
    sex: string;
};

export type fillArrayOfPeopleType<T> = (numersOfPeople: number, data?: T[]) => T[];
