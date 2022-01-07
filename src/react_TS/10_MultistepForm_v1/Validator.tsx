import { validationType, DataItemType, DataType, InitialStateType } from "./App.d";
class Validator {
    static whetherTheNamePropertyIsCorrect(value: string, errorMsg: string): any {
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
    }

    static whetherTheEmailPropertyIsCorrect(value: string, errorMsg: string): any {
        let information = {
            isError: false,
            errorMessage: "",
        };
        if (!value.match(/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i)) {
            // throw new Error(`${errorMsg} is invalid`);
            return (information = {
                isError: true,
                errorMessage: errorMsg,
            });
        }
        return information;
    }

    static whetherThePasswordPropertyIsCorrect(value: string, errorMsg: string) {
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
    }

    static whetherThePhoneNumberPropertyIsCorrect(value: string, errorMsg: string) {
        let information = {
            isError: false,
            errorMessage: "",
        };
        if (value.length < 9) {
            return (information = {
                isError: true,
                errorMessage: errorMsg,
            });
        }

        return information;
    }
}

export const validation: validationType = {
    name: (name: string, value: string) => Validator.whetherTheNamePropertyIsCorrect(value, `Error MSG ${name}`),
    surname: (name: string, value: string) => Validator.whetherTheNamePropertyIsCorrect(value, `Error MSG ${name}`),
    email: (name: string, value: string) => Validator.whetherTheEmailPropertyIsCorrect(value, `Error MSG ${name}`),
    phonenumber: (name: string, value: string) =>
        Validator.whetherThePhoneNumberPropertyIsCorrect(value, `Error MSG ${name}`),
    // phonenumber: (name: string, value: string) => {
    //     let information = {
    //         isError: false,
    //         errorMessage: "",
    //     };
    //     if (value.length < 9) {
    //         return (information = {
    //             isError: true,
    //             errorMessage: `Error message in ${name}`,
    //         });
    //     }

    //     return information;
    // },
};

export const checkProperties = {
    functionToCheckProperties: (dataItem: DataItemType): boolean => {
        if (dataItem.error) return false;
        if (!dataItem.value) return false;
        return true;
    },
    all: (data: DataType) => {
        const allArray = [
            checkProperties["name"](data),
            checkProperties["surname"](data),
            checkProperties["email"](data),
            checkProperties["phonenumber"](data),
        ];
        return !allArray.some((item) => item === false);
    },
    name: (data: DataType) => checkProperties["functionToCheckProperties"](data.name),
    surname: (data: DataType) => checkProperties["functionToCheckProperties"](data.surname),
    email: (data: DataType) => checkProperties["functionToCheckProperties"](data.email),
    phonenumber: (data: DataType) => checkProperties["functionToCheckProperties"](data.phonenumber),
};

export const chceckShowedStep = (state: InitialStateType) => {
    const { visibleStep, data } = state;
    if (visibleStep === 0) {
        return checkProperties["name"](data) && checkProperties["surname"](data);
    } else if (visibleStep === 1) {
        return checkProperties["name"](data);
    } else if (visibleStep === 2) {
        return checkProperties["phonenumber"](data);
    }
    return false;
};

export default Validator;
