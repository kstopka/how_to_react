import { LangInitialState } from "../App.d";

export const reducer = (state: LangInitialState, action: any) => {
    switch (action.type) {
        case "value": {
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};

export const initialState: LangInitialState = {
    texts: {
        title: "Title",
        subtitle: "Subtitle",
        ctaButton: "Cta Button",
    },
};
