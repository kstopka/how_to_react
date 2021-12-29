import * as React from "react";
import { FunctionComponent } from "react";
import { useFilledArrayInputsWithPassword } from "../hooks/useFilledArrayInputsWithPassword";

interface PasswordInputProps {
    password: string;
}

const PasswordInput: FunctionComponent<PasswordInputProps> = ({ password }) => {
    const filledArrayInputsWithPassword = useFilledArrayInputsWithPassword(password);
    console.log(filledArrayInputsWithPassword);
    return <div className="password-input">{JSON.stringify(filledArrayInputsWithPassword)}</div>;
};

export default PasswordInput;
