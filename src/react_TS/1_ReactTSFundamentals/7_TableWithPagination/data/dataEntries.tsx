const createArray = (items: number): number[] => {
    const data = [];
    let number = 1;
    while (number <= items) {
        data.push(number);
        number++;
    }
    return data;
};

export const dataEntries: Array<any> = createArray(6353);
