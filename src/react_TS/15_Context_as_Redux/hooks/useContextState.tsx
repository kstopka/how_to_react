import { useContext } from "react";
import { Ctx } from "../Provider";

export const useContextState = (stateNames?: Array<string>) => {
    const { state } = useContext(Ctx);

    // jeśli stateNames jest pusty to zwraca cały state
    if (stateNames === undefined) {
        return state;
    }
    // jeśli stateNames nie jest pusty to zwraca podane w arrayu klucze i wartości w formie nowego obiektu
    const newObj = stateNames.reduce((prev, curr) => {
        // prev = { text: curr, number: curr };
        // prev.curr =

        console.log(prev);

        return prev;
    }, {});
    // return ...
};
