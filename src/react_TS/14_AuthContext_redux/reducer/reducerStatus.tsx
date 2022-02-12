import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";
import { useCredentials } from "../App.hooks";
import { CredentialsAction, Status } from "../App.d";

const checkCookiesToLogin = () => {
    //NOTE: jak to ominąć?
    // const { checkCredentials } = useCredentials();

    const cookie = Cookies.get();
    const arrayOfLogins = Object.keys(cookie);
    const login = arrayOfLogins[0];
    //NOTE: password może być string | undefinded => musi być string
    const password = Cookies.get(login);
    if (password === undefined) {
        return false;
    }
    // const isLogged = checkCredentials(login, password);
    // return isLogged;
    return false;
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
