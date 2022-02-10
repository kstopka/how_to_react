import { createSlice } from "@reduxjs/toolkit";
import { CredentialsAction, Status } from "./App.d";

const initialState: Status = {
    isLogged: false,
    login: "",
    password: "",
};

export const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        changeIsLogged: (state) => {
            state.isLogged = !state.isLogged;
            state.login = "";
            state.password = "";
        },
        setCredentials: (state, action: CredentialsAction) => {
            state[action.payload.name] = action.payload.value;
        },
    },
});

export const { changeIsLogged, setCredentials } = statusSlice.actions;

export default statusSlice.reducer;
