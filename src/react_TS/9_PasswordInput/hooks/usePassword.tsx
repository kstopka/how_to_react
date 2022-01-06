// import * as React from "react";
import { useEffect, useContext } from "react";
import { PasswordContext } from "../context/PasswordContext";
import { Values } from "../App.d";

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
    const allIndexes: number[] = [...new Array(length)].map((item, index) => (item = index));
    const shuffleAllIndexes: number[] = shuffle(allIndexes);
    const numberOfIndexes: number = calculateNumberOfIndexes(length);
    const indexes: number[] = shuffleAllIndexes.slice(0, numberOfIndexes);
    const values: Values = indexes.reduce(
        (previous, current) => ({
            ...previous,
            [current]: "",
        }),
        {}
    );
    return { indexes, values };
};

export const usePassword = (password: string) => {
    const { dispatchPasswordState } = useContext(PasswordContext);
    useEffect(() => {
        const { indexes, values } = getRandomIndexesOfPassword(password);
        console.log(indexes);
        indexes.forEach((item) => dispatchPasswordState({ type: "setInitialPassword", index: item, value: "" }));
        // dispatchPasswordState({ type: "setInitialPassword", index: 2, value: "" });
    }, [dispatchPasswordState, password]);

    return { dispatchPasswordState };
};

// NOTE: initial state to moj password
// dodac generator  initial state
// dodac jakiego reducera
//
