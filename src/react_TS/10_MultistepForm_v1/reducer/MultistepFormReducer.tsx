import { initialStateType } from "../App.d";

export const reducer = (state: any, action: { type: string; name: any; value: string }) => {
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
                    error: true,
                    errorMessage: value,
                },
            };
        }
    }
};

export const initialState: initialStateType = {
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
