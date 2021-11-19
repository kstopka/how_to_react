class Validator {
    static throwErrorOnInvalidProperName(value: string, errorMsg: string): boolean {
        let error = false;
        if (value.length < 2) {
            // throw new Error(`${errorMsg} is to short`);
            return (error = true);
        }
        if (!value.match(/^[A-Z\d]/)) {
            // throw new Error(`${errorMsg} must start at capital letter`);
            return (error = true);
        }
        return error;
    }

    static throwErrorOnInvalidEmail(value: string, errorMsg: string): boolean {
        let error = false;
        if (!value.match(/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i)) {
            // throw new Error(`${errorMsg} is invalid`);
            return (error = true);
        }
        return error;
    }

    static throwErrorOnWeakPassword(value: string, errorMsg: string) {
        let error = false;
        if (value.length < 8) {
            // throw new Error(`${errorMsg} is to short`);
            return (error = true);
        }
        if (!value.match(/[A-Z]/)) {
            // throw new Error(`${errorMsg} dont have any uppercase`);
            return (error = true);
        }
        if (!value.match(/[a-z]/)) {
            // throw new Error(`${errorMsg} dont have any lowercase`);
            return (error = true);
        }
        if (!value.match(/\d+/)) {
            // throw new Error(`${errorMsg} dont have any number`);
            return (error = true);
        }
        if (!value.match(/.[!,@,#,$,%,^,&,*,?,_,~]/)) {
            // throw new Error(`${errorMsg} dont have any `);
            return (error = true);
        }
        return error;
    }
}

export default Validator;
