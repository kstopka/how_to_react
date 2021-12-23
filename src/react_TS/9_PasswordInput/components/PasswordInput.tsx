import * as React from "react";
import { FunctionComponent } from "react";
import "../css/style.css";

interface PasswordInputProps {
    password: string;
    onSuccess?: boolean;
}

const calculateNumbersInputs = (number: number): number => {
    const minNsmbers = Math.ceil(number * 1.5);
    const maxNumbers = Math.ceil(number * 2);
    return Math.floor(Math.random() * (maxNumbers - minNsmbers) + minNsmbers);
};

const PasswordInput: FunctionComponent<PasswordInputProps> = ({ password, onSuccess = false }) => {
    const numbersInputs = calculateNumbersInputs(password.length);

    return (
        <div className="password-input">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" className="disabled" disabled={true} />
        </div>
    );
};

export default PasswordInput;
