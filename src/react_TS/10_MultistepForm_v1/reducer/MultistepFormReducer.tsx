import { DataState, DataActionType } from "../App.d";

export const dataReducer = (state: DataState, action: DataActionType) => {
    const { type, value, name } = action;
    switch (type) {
        case "setValue": {
            return {
                ...state,
                [name]: {
                    value,
                    error: false,
                    errorMessage: "",
                },
            };
        }
        case "setError": {
            return {
                ...state,
                [name]: {
                    value: "",
                    error: true,
                    errorMessage: value,
                },
            };
        }
    }

    return state;
};

export const initidalDataState: DataState = {
    name: {
        value: "",
        error: false,
        errorMessage: "",
    },
    surname: {
        value: "",
        error: false,
        errorMessage: "",
    },
    email: {
        value: "",
        error: false,
        errorMessage: "",
    },
    phonenumber: {
        value: "",
        error: false,
        errorMessage: "",
    },
};
