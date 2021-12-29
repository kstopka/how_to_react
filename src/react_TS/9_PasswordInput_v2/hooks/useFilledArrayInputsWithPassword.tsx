const shuffle = (array: any[]) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};

const calculateNumbersInputs = (length: number) => {
    const minNsmbers = Math.ceil(length * 1.5);
    const maxNumbers = Math.ceil(length * 2);
    return Math.floor(Math.random() * (maxNumbers + 1 - minNsmbers) + minNsmbers);
};

export const useFilledArrayInputsWithPassword = (password: string) => {
    const numbersInputs = calculateNumbersInputs(password.length);
    console.log(numbersInputs);
    const arrayWithInputs = new Array(numbersInputs).fill(false).fill(true, 0, password.length);
    console.log(arrayWithInputs);
    const shuffledArrayWithInputs = shuffle(arrayWithInputs);
    console.log(shuffledArrayWithInputs);
    const splitedPassword: string[] = password.split("");
    console.log(splitedPassword);
    const filledArrayWithPassword = shuffledArrayWithInputs.reduce((prev, curr, index) => {
        if (curr) {
            prev[index] = splitedPassword[0];
            splitedPassword.splice(0, 1);
        }
        return prev;
    }, shuffledArrayWithInputs);
    console.log(filledArrayWithPassword);

    return filledArrayWithPassword;
};
