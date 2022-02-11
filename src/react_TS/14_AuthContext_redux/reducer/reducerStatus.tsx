import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { CredentialsAction, Status } from "../App.d";
import { checkCredentials } from "../hooks/useCredentials";
import { RootState } from "../store";

const checkCookiesToLogin = () => {
    //NOTE: jak to ominąć?
    // const { usersCredentials } = useSelector((state: RootState) => state.data);

    const cookie = Cookies.get();
    const arrayOfLogins = Object.keys(cookie);
    const login = arrayOfLogins[0];
    //NOTE: password może być string | undefinded => musi być string
    const password = Cookies.get(login);
    if (password === undefined) {
        return false;
    }
    // const isLogged = checkCredentials(login, password, usersCredentials);
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
