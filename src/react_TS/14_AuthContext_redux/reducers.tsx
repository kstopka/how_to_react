const rootReducer = (state = [], action: any) => {
    switch (action.type) {
        case "changeIsLogged": {
            return {
                ...state,
                isLogged: true,
            };
        }

        default:
            return state;
    }
};

export default rootReducer;
