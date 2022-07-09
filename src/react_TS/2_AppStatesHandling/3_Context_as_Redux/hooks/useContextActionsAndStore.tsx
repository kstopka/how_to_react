import { ActionsType, StateType } from "../App.d";
import { useContextActions, useContextState } from "../App.hooks";

export const useContextActionsAndStore = (stateNames?: Array<StateType>, actionNames?: Array<ActionsType>) => {
    const newState = useContextState(stateNames);
    const newActions = useContextActions(actionNames);
    return { newState, newActions };
};
