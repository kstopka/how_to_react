import { IInitialStatePassowrd, ActionsCart, ActionType } from "../App.d";

export const passwordReducer = (state: IInitialStatePassowrd, action: ActionsCart) => {
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
            const { isSuccess } = action.payload;
            return {
                ...state,
                onSuccess: isSuccess,
            };
        }

        default:
            return state;
    }
};

export const initialStatePassword: IInitialStatePassowrd = {
    indexes: [],
    values: {},
    onSuccess: false,
};
