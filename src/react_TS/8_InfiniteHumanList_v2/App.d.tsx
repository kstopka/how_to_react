export type objPersonType = {
    id: number;
    name: string;
    surname: string;
    age: number;
    sex: string;
};

export type fillArrayOfPeopleType<T> = (numersOfPeople: number, data?: T[]) => T[];
