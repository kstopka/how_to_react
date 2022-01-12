import { RefStateType, Actions } from "../App.d";

export const refReducer = (state: RefStateType, action: Actions) => {
    switch (action.type) {
        case "addRef": {
            return {
                ...state,
                refComponents: [...state.refComponents, action.payload.value],
            };
        }
        default:
            return state;
    }
};

export const initialRefState: RefStateType = {
    refComponents: [],
};
