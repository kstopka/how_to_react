import { NewDataState, DataActionType } from "../App.d";

export const dataReducer = (state: NewDataState, action: DataActionType) => {
    const { type, value, name } = action;
    switch (type) {
        case "setValue": {
            return {
                ...state,
                datastate: {
                    [name]: {
                        value,
                        error: false,
                        errorMessage: "",
                    },
                },
            };
        }
        case "setError": {
            return {
                ...state,
                datastate: {
                    [name]: {
                        value: "",
                        error: true,
                        errorMessage: value,
                    },
                },
            };
        }
        case "setVisibleStep": {
            return {
                ...state,
            };
        }
    }

    return state;
};

export const initidalDataState: NewDataState = {
    dataState: {
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
    },
    visibleStep: 0,
};
