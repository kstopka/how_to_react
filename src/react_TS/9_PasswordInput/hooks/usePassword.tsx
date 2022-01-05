// import * as React from "react";
import { initial } from "lodash";
import { useReducer, useEffect } from "react";

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
    // const splitedPassword = password.split("");
    const allIndexes = [...new Array(length)].map((item, index) => (item = index));
    const shuffleAllIndexes = shuffle(allIndexes);
    const numberOfIndexes = calculateNumberOfIndexes(length);
    const indexes = shuffleAllIndexes.slice(0, numberOfIndexes);
    const values = indexes.reduce((previous, current) => {
        previous[current] = "";
        return previous;
    }, {});

    return { indexes, values };
};

export const usePassword = (password: string) => {
    const [passwordState, setPasswordState] = useReducer(reducer, initial);
    useEffect(() => {
        setPasswordState(getRandomIndexesOfPassword(password));
    }, [password]);

    return { passwordState, setPasswordState };
};
