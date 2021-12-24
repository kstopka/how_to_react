const shuffle = (array: any[]) => {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};

export const useFilledArrayInputsWithPassword = (password: string) => {
    const length = password.length;
    const minNsmbers = Math.ceil(length * 1.5);
    const maxNumbers = Math.ceil(length * 2);
    const numbersInputs = Math.floor(Math.random() * (maxNumbers + 1 - minNsmbers) + minNsmbers);
    const arrayWithInputs = new Array(numbersInputs).fill(false).fill(true, 0, length);
    const shuffledArrayWithInputs = shuffle(arrayWithInputs);

    const splitedPassword: string[] = password.split("");

    const filledArrayWithPassword = shuffledArrayWithInputs.reduce((prev, curr, index) => {
        if (curr) {
            prev[index] = splitedPassword[0];
            splitedPassword.splice(0, 1);
        }
        return prev;
    }, shuffledArrayWithInputs);

    return filledArrayWithPassword;
};
