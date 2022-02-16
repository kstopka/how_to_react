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
            state[action.payload.name].errorMessage = "";
            state[action.payload.name].error = false;
        },
        setErrorMessage: (state, action: CredentialsAction) => {
            state[action.payload.name].errorMessage = action.payload.value;
            state[action.payload.name].error = true;
        },
    },
});

export const { changeIsLogged, setCredentials, setErrorMessage } = statusSlice.actions;

export default statusSlice.reducer;
