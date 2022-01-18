import { InitialStateType } from "../App.d";

export const reducerTakedCredentials = (state: any, action: { type: string; value?: string; target?: any }) => {
    switch (action.type) {
        case "setName": {
            return {
                ...state,
                [action.target]: {
                    name: action.value,
                    error: false,
                    errorMessage: "",
                },
            };
        }
        case "setError": {
            return {
                ...state,
                [action.target]: {
                    error: true,
                    errorMessage: action.value,
                },
            };
        }
    }
};

export const initialCredentials = {
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
