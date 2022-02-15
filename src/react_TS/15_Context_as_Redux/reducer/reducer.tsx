import { Actions, ActionType, State } from "../App.d";

export const initialState: State = {
    text: "text",
    number: 0,
};

export const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionType.changeText: {
            return {
                ...state,
                text: action.payload,
            };
        }
        case ActionType.resetText: {
            return {
                ...state,
                text: "",
            };
        }

        default:
            return state;
    }
};
