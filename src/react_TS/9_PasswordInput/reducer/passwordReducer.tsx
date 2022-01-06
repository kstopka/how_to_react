import { PasswordState, PasswordActionType } from "../App.d";

export const passwordReducer = (state: PasswordState, action: PasswordActionType) => {
    const { type, value, index } = action;
    switch (type) {
        case "setInitialPassword": {
            console.log(`start reducer`);
            // state.indexes.push(index);
            state.values[index] = value;
            return {
                ...state,
            };
        }
        case "setValues": {
            state.values[index] = value;
            return {
                ...state,
            };
        }

        default:
            return { ...state };
    }
};

export const initialPasswordState: PasswordState = {
    indexes: [],
    values: {},
    // indexes: [1, 3, 4, 6],
    // values: {
    //     "1": "",
    //     "3": "",
    //     "4": "",
    //     "6": "",
    // },
};
