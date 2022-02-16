import Cookies from "js-cookie";
import { UserCredentials, validationType } from "./App.d";

const whetherTheNamePropertyIsCorrect = (value: string, errorMsg: string) => {
    let information = {
        isError: false,
        errorMessage: "",
    };
    if (value.length < 2) {
        // throw new Error(`${errorMsg} is to short`);
        return (information = {
            isError: true,
            errorMessage: errorMsg,
        });
    }
    if (!value.match(/^[A-Z\d]/)) {
        // throw new Error(`${errorMsg} must start at capital letter`);
        return (information = {
            isError: true,
            errorMessage: errorMsg,
        });
    }
    return information;
};

const whetherThePasswordPropertyIsCorrect = (value: string, errorMsg: string) => {
    let information = {
        isError: false,
        errorMessage: "",
    };
    if (value.length < 8) {
        // throw new Error(`${errorMsg} is to short`);
        return (information = {
            isError: true,
            errorMessage: errorMsg,
        });
    }

    if (!value.match(/[A-Z]/)) {
        // throw new Error(`${errorMsg} dont have any uppercase`);
        return (information = {
            isError: true,
            errorMessage: errorMsg,
        });
    }

    if (!value.match(/[a-z]/)) {
        // throw new Error(`${errorMsg} dont have any lowercase`);
        return (information = {
            isError: true,
            errorMessage: errorMsg,
        });
    }

    if (!value.match(/\d+/)) {
        // throw new Error(`${errorMsg} dont have any number`);
        return (information = {
            isError: true,
            errorMessage: errorMsg,
        });
    }

    if (!value.match(/.[!,@,#,$,%,^,&,*,?,_,~]/)) {
        // throw new Error(`${errorMsg} dont have any `);
        return (information = {
            isError: true,
            errorMessage: errorMsg,
        });
    }

    return information;
};

const validation: validationType = {
    login: (name: string, value: string) => whetherTheNamePropertyIsCorrect(value, `Error MSG ${name}`),
    password: (name: string, value: string) => whetherThePasswordPropertyIsCorrect(value, `Error MSG ${name}`),
};

export const checkCredentials = (usersCredentials: UserCredentials[], login: string, password: string) => {
    const isLogged = usersCredentials.some((element) => element.login === login && element.password === password);
    return isLogged;
};

export const checkCookiesToLogin = (usersCredentials: UserCredentials[]) => {
    const cookie = Cookies.get();
    const arrayOfLogins = Object.keys(cookie);
    const login = arrayOfLogins[0];
    const password = Cookies.get(login);
    if (password === undefined) {
        return false;
    }
    const isLogged = checkCredentials(usersCredentials, login, password);
    return isLogged;
};

export default validation;
