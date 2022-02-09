export const Validator = {
    throwErrorIfGreaterThanOneHundred: (value: number, name: string) => {
        if (value > 100) {
            throw new Error(`The ${name} cannot be greater than 100 percent`);
        }
    },
    throwErrorIfLessThanZero: (value: number, name: string) => {
        if (value < 0) {
            throw new Error(`The ${name} value cannot be less than 0`);
        }
    },
    throwErrorIfTheseNumbersCannotBeSubtracted: (firstValue: number, secondValue: number, name: string) => {
        if (firstValue > secondValue) {
            throw new Error(`This ${name} is too high, you cant't buy that much`);
        }
    },
};
