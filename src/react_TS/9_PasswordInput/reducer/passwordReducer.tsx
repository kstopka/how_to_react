import { PasswordState, PasswordActionType } from "../App.d";

export const passwordReducer = (state: PasswordState, action: PasswordActionType) => {
    const { type, value, name, index } = action;
    switch (type) {
        case "setInitialPassword": {
            return {
                ...state,
                indexes: [index],
                values: {
                    [name]: "",
                },
            };
        }
        case "setValues": {
            return {
                ...state,
                values: {
                    [name]: value,
                },
            };
        }

        default:
            return { ...state };
    }
};

export const initialPasswordState: PasswordState = {
    indexes: [],
    values: {},
};
