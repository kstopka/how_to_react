import { PasswordState, PasswordActionType } from "../App.d";

export const passwordReducer = (state: PasswordState, action: PasswordActionType) => {
    const { type, value, index } = action;
    switch (type) {
        case "setInitialPassword": {
            return {
                ...state,
                values: {
                    ...state.values,
                    [index]: value,
                },
                indexes: [index, ...state.indexes],
            };
        }
        case "setValue": {
            return {
                ...state,
                values: {
                    ...state.values,
                    [index]: value,
                },
            };
        }
        case "setOnSuccess": {
            return {
                ...state,
                onSuccess: true,
            };
        }

        default:
            return { ...state };
    }
};

export const initialPasswordState: PasswordState = {
    indexes: [],
    values: {},
    onSuccess: false,
    // indexes: [1, 3, 4, 6],
    // values: {
    //     "1": "",
    //     "3": "",
    //     "4": "",
    //     "6": "",
    // },
};
