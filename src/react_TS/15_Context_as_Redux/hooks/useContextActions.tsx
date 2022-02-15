import { actions } from "../Provider";
import { currOfActions } from "../App.d";

export const useContextActions = (actionNames?: Array<string>) => {
    // jeśli actionNames jest pusty to zwraca wszystkie akcje
    if (actionNames === undefined) {
        return actions;
    }
    // jeśli actionNames nie jest pusty to zwraca akcje wskazane po nazwie w arryu actionNames
    const newAction = actionNames.reduce((prev, curr) => {
        //NOTE: inaczej to:
        if (curr === "changeText" || curr === "resetText") {
            const fn = actions[curr];
            prev = { ...prev, [curr]: fn };
        }
        return prev;
    }, {});
    return newAction;
};
