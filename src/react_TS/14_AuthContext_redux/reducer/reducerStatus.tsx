import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { CredentialsAction, Status } from "../App.d";

const checkCookiesToLogin = () => {
    let isLogged = false;
    //TODO: pobrac users z api

    const users = [
        {
            login: "Admin",
            password: "123qwe!@#QWE",
        },
        {
            login: "jankowalski@gmail.com",
            password: "admin12345@",
        },
    ];
    // Cookies.set("jankowalski@gmail.com", "admin12345@");

    const cookie = Cookies.get();
    const arrayOfLogins = Object.keys(cookie);
    const login = arrayOfLogins[0];
    const password = Cookies.get(login);

    isLogged = users.some((element) => element.login === login && element.password === password);

    return isLogged;
};

const initialState: Status = {
    isLogged: checkCookiesToLogin(),
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
        setErrorMessage: (state, action: CredentialsAction) => {
            state[action.payload.name].errorMessage = action.payload.value;
            state[action.payload.name].error = true;
        },
    },
});

export const { changeIsLogged, setCredentials, setErrorMessage } = statusSlice.actions;

export default statusSlice.reducer;
