import { LangInitialState } from "../App.d";

export const reducer = (state: LangInitialState, action: any) => {
    switch (action.type) {
        case "addition":
            return { counter: state.counter + 1 };
        case "subtraction":
            return { counter: state.counter - 1 };
        case "reset":
            return { counter: 0 };
        default:
            return state;
    }
};

export const initialState: LangInitialState = {
    // texts: {
    //     title: "Title",
    //     subtitle: "Subtitle",
    //     ctaButton: "Cta Button",
    // },
    counter: 0,
};
