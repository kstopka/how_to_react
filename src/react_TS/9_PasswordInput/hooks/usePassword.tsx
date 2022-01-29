import { useEffect, useContext } from "react";
import { ContextPassword } from "../context/PasswordContext";
import { ActionType } from "../App.d";
// import { Values, ActionType } from "../App.d";

const shuffle = (array: any[]) => {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};
const calculateNumberOfIndexes = (length: number) => {
    const minNumbers = Math.ceil(length * 0.3);
    const maxNumbers = Math.ceil(length * 0.6);
    return Math.floor(Math.random() * (maxNumbers + 1 - minNumbers) + minNumbers);
};

const getRandomIndexesOfPassword = (password: string) => {
    const length = password.length;
    const allIndexes: number[] = [...new Array(length)].map((item, index) => (item = index));
    const shuffleAllIndexes: number[] = shuffle(allIndexes);
    const numberOfIndexes: number = calculateNumberOfIndexes(length);
    const indexes: number[] = shuffleAllIndexes.slice(0, numberOfIndexes);
    // const values: Values = indexes.reduce(
    //     (previous, current) => ({
    //         ...previous,
    //         [current]: "",
    //     }),
    //     {}
    // );
    // return { indexes, values };
    return { indexes };
};

export const usePassword = (password: string) => {
    const { dispatchPassword } = useContext(ContextPassword);

    useEffect(() => {
        const { indexes } = getRandomIndexesOfPassword(password);

        indexes.forEach((item) =>
            dispatchPassword({ type: ActionType.setInitialPassword, payload: { index: item, value: "" } })
        );
    }, [password]);
};
