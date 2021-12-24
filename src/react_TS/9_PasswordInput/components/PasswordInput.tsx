import * as React from "react";
import { FunctionComponent } from "react";
import "../css/style.css";
import { useFilledArrayInputsWithPassword } from "../hooks/useFilledArrayInputsWithPassword";
import SingleInput from "./SingleInput";

interface PasswordInputProps {
    password: string;
    onSuccess?: boolean;
}

const PasswordInput: FunctionComponent<PasswordInputProps> = ({ password, onSuccess = false }) => {
    const filledArrayInputsWithPassword = useFilledArrayInputsWithPassword(password);
    const showInputs = filledArrayInputsWithPassword.map(
        (element: string | boolean, index: React.Key | null | undefined) => <SingleInput key={index} item={element} />
    );
    return <div className="password-input">{showInputs}</div>;
};

export default PasswordInput;
