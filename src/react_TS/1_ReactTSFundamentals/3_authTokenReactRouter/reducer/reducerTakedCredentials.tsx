import { type } from "os";
import { ActionDispatch, InitialCredentials, InitialStateType } from "../App.d";

export const reducerTakedCredentials = (state: any, action: ActionDispatch) => {
    const { type, value, name } = action;
    switch (type) {
        case "setName": {
            return {
                ...state,
                [name]: {
                    name: value,
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
    return state;
};

export const initialCredentials: InitialCredentials = {
    login: {
        value: "",
        error: false,
        errorMessage: "",
    },
    password: {
        value: "",
        error: false,
        errorMessage: "",
    },
};

export const initialState: InitialStateType = {
    imBusy: false,
    Credentials: [],
    errorMessage: "",
    error: false,
};

export const credentialsReducer = (state: any, action: { type: string; value?: any }) => {
    switch (action.type) {
        case "setBusy": {
            return {
                ...state,
                imBusy: true,
            };
        }
        case "setError": {
            return {
                ...state,
                imBusy: true,
                errorMessage: action.value,
                error: true,
            };
        }
        case "setData": {
            return {
                ...state,
                imBusy: true,
                credentials: action.value,
            };
        }
    }
};
