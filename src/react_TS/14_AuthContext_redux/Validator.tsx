import { validationType } from "./App.d";

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
        console.log(errorMsg);
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
        console.log(errorMsg);
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

export default validation;
