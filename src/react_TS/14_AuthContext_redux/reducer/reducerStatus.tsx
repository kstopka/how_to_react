import { createSlice } from "@reduxjs/toolkit";
import { CredentialsAction, Status } from "../App.d";

const initialState: Status = {
    isLogged: false,
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

const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        changeIsLogged: (state) => {
            state.isLogged = !state.isLogged;
            state.login = initialState.login;
            state.password = initialState.password;
        },
        setCredentials: (state, action: CredentialsAction) => {
            state[action.payload.name].value = action.payload.value;
        },
    },
});

export const { changeIsLogged, setCredentials } = statusSlice.actions;

export default statusSlice.reducer;
