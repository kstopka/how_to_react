import { NewDataState, DataActionType } from "../App.d";

export const dataReducer = (state: NewDataState, action: DataActionType) => {
    const { type, value, name } = action;
    switch (type) {
        case "setValue": {
            return {
                ...state,

                dataState: {
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
                dataState: {
                    [name]: {
                        value: "",
                        error: true,
                        errorMessage: value,
                    },
                },
            };
        }
        case "setVisibleStep": {
            //NOTE: nie działa
            if (name === "addition") {
                state.visibleStep = state.visibleStep + 1;
            } else if (name === "subtraction") {
                state.visibleStep = state.visibleStep - 1;
            }
            console.log(state.visibleStep);
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
