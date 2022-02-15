import { InitialStateParallax } from "../App.d";

export const reducerParallax = (state: InitialStateParallax, action: any) => {
    switch (action.type) {
        case "Action.": {
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};

export const initialStateParallax: InitialStateParallax = {};
