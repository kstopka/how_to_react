import { Ctx } from "../Provider";
import { useContext } from "react";
import { ActionsType } from "../App.d";

export const useContextActions = (actionNames?: Array<ActionsType>) => {
    const { actions } = useContext(Ctx);
    // jeśli actionNames jest pusty to zwraca wszystkie akcje
    if (actionNames === undefined) {
        return actions;
    }
    // jeśli actionNames nie jest pusty to zwraca akcje wskazane po nazwie w arryu actionNames
    const newAction = actionNames.reduce((prev, curr) => {
        const fn = actions[curr];
        prev = { ...prev, [curr]: fn };
        return prev;
    }, {});
    return newAction;
};
