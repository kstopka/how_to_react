import { Types, DataType, DataActions, VisibleStepActions } from "../App.d";

export const dataReducer = (state: DataType, action: VisibleStepActions | DataActions) => {
    switch (action.type) {
        case Types.setValue: {
            return {
                ...state,
                [action.payload.name]: {
                    value: action.payload.value,
                    error: false,
                    errorMessage: "",
                },
            };
        }
        case Types.setError: {
            console.log(action.payload.name);
            return {
                ...state,
                [action.payload.name]: {
                    value: "",
                    error: true,
                    errorMessage: action.payload.value,
                },
            };
        }
    }

    return state;
};

export const visibleStepreducer = (state: number, action: VisibleStepActions | DataActions) => {
    switch (action.type) {
        case Types.addition:
            return state + 1;
        case Types.subtraction:
            return state - 1;
    }
    return state;
};
