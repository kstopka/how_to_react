import { useContextActions, useContextState } from "../App.hooks";

export const useContextActionsAndStore = (stateNames?: Array<string>, actionNames?: Array<string>) => {
    const newState = useContextState(stateNames);
    const newActions = useContextActions(actionNames);
    return { newState, newActions };
};
