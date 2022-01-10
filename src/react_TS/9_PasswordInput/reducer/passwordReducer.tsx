import { PasswordState, PasswordActions, ActionType } from "../App.d";

export const passwordReducer = (state: PasswordState, action: PasswordActions) => {
    switch (action.type) {
        case ActionType.setInitialPassword: {
            const { value, index } = action.payload;
            const { values, indexes } = state;
            return {
                ...state,
                values: {
                    ...values,
                    [index]: value,
                },
                indexes: [index, ...indexes],
            };
        }
        case ActionType.setValue: {
            const { value, index } = action.payload;
            const { values } = state;

            return {
                ...state,
                values: {
                    ...values,
                    [index]: value,
                },
            };
        }
        case ActionType.setOnSuccess: {
            const { onSuccess } = action.payload;
            return {
                ...state,
                onSuccess: onSuccess,
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
};
