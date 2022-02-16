import { useContext } from "react";
import { StateType } from "../App.d";
import { Ctx } from "../Provider";

export const useContextState = (stateNames?: Array<StateType>) => {
    // stateNames = ["text", "number"]
    const { state } = useContext(Ctx);

    // jeśli stateNames jest pusty to zwraca cały state
    if (stateNames === undefined) {
        return state;
    }
    // jeśli stateNames nie jest pusty to zwraca podane w arrayu klucze i wartości w formie nowego obiektu
    const newState = stateNames.reduce((prev, curr) => (prev = { ...prev, [curr]: "" }), {});
    return newState;
};
