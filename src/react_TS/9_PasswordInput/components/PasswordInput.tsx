import * as React from "react";
import { FunctionComponent } from "react";
import "../css/style.css";
import { useCreateShuffledArrayWithInputs } from "../hooks/useCreateShuffledArrayWithInputs";

interface PasswordInputProps {
    password: string;
    onSuccess?: boolean;
}

const PasswordInput: FunctionComponent<PasswordInputProps> = ({ password, onSuccess = false }) => {
    const result: string[] = password.split("");
    let iterator = 0;
    const shuffledArrayWithInputs = useCreateShuffledArrayWithInputs(password.length);

    const filledArrayWithPassword = shuffledArrayWithInputs.reduce((prev, curr, index) => {
        if (prev[index]) {
            prev[index] = result[iterator];
            iterator++;
        }
        return prev;
    }, shuffledArrayWithInputs);

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
